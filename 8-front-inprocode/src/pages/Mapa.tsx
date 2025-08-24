import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useState } from 'react'

// Fix icones Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

type Location = {
  _id?: string
  name: string
  lat: number
  lng: number
}

export default function Mapa() {
  const [locations, setLocations] = useState<Location[]>([])
  const [form, setForm] = useState<Location>({ name: '', lat: 0, lng: 0 })
  const [search, setSearch] = useState('')
  type Suggestion = {
    display_name: string
    lat: string
    lon: string
  }
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])

  useEffect(() => {
    fetchLocations()
  }, [])

  const fetchLocations = async () => {
    const res = await fetch('http://localhost:3000/api/locations')
    const data = await res.json()
    setLocations(data)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.name === 'name' ? e.target.value : parseFloat(e.target.value) })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('http://localhost:3000/api/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setForm({ name: '', lat: 0, lng: 0 })
    fetchLocations()
  }

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)

    if (value.length > 2) {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`)
      const data = await res.json()
      setSuggestions(data)
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (place: Suggestion) => {
    setForm({
      name: place.display_name,
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
    })
    setSearch('')
    setSuggestions([])
  }

  return (
    <div className="pt-16 h-[calc(100vh-64px)] flex flex-col">

      {/* 🔍 Buscador amb autocompletar */}
      <div className="relative z-50 w-full max-w-2xl mx-auto p-4 bg-white">
        <input
          type="text"
          placeholder="Cerca un lloc del món (ex: Barcelona)"
          value={search}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full"
        />

        {suggestions.length > 0 && (
          <ul className="absolute top-14 left-0 w-full bg-white border rounded z-10 shadow max-h-60 overflow-y-auto">
            {suggestions.map((sug, i) => (
              <li
                key={i}
                onClick={() => handleSuggestionClick(sug)}
                className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {sug.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 📋 Formulari per afegir ubicació */}
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow flex flex-wrap gap-4 items-center justify-center max-w-5xl mx-auto w-full">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded w-[200px]"
          required
        />
        <input
          type="number"
          name="lat"
          placeholder="Latitud"
          value={form.lat}
          onChange={handleChange}
          className="border p-2 rounded w-[150px]"
          step="any"
          required
        />
        <input
          type="number"
          name="lng"
          placeholder="Longitud"
          value={form.lng}
          onChange={handleChange}
          className="border p-2 rounded w-[150px]"
          step="any"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Afegir ubicació
        </button>
      </form>

      {/* 🗺️ Mapa */}
      <div className="flex-grow mt-8 relative z-10">
        <MapContainer center={[41.3874, 2.1699]} zoom={13} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((loc) => (
            <Marker key={loc._id} position={[loc.lat, loc.lng]}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}

          {locations.length > 1 && (
            <Polyline
              positions={locations.map((loc) => [loc.lat, loc.lng])}
              pathOptions={{ color: 'red' }}
            />
          )}
        </MapContainer>
      </div>
    </div>
  )
}
