"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronUp, X } from "lucide-react"

const filterCategories = {
  carreras: ["Arquitectura", "Diseño Gráfico", "Ingeniería", "Programación", "Gaming", "Oficina", "Multimedia"],
  marcas: ["Dell", "HP", "Lenovo", "Apple", "ASUS", "Acer", "MSI"],
  procesadores: [
    "Intel Core i3",
    "Intel Core i5",
    "Intel Core i7",
    "Intel Core i9",
    "AMD Ryzen 5",
    "AMD Ryzen 7",
    "Apple M1/M2",
  ],
  memoria: ["8GB", "16GB", "32GB", "64GB"],
}

export default function SearchFilters() {
  const [priceRange, setPriceRange] = useState([500, 2500])
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    carreras: true,
    precio: true,
    marcas: true,
    procesadores: false,
    memoria: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || []
      if (checked) {
        return { ...prev, [category]: [...current, value] }
      } else {
        return { ...prev, [category]: current.filter((item) => item !== value) }
      }
    })
  }

  const removeFilter = (category: string, value: string) => {
    handleFilterChange(category, value, false)
  }

  const clearAllFilters = () => {
    setSelectedFilters({})
    setPriceRange([500, 2500])
  }

  const getTotalFilters = () => {
    return Object.values(selectedFilters).reduce((total, filters) => total + filters.length, 0)
  }

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {getTotalFilters() > 0 && (
        <Card className="border-0 shadow-lg rounded-2xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Filtros Activos ({getTotalFilters()})
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-[#712581] hover:text-[#712581]/80"
              >
                Limpiar todo
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {Object.entries(selectedFilters).map(([category, filters]) =>
                filters.map((filter) => (
                  <Badge
                    key={`${category}-${filter}`}
                    variant="secondary"
                    className="bg-[#712581]/10 text-[#712581] hover:bg-[#712581]/20 px-3 py-1 rounded-full"
                  >
                    {filter}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-1 h-4 w-4 p-0 hover:bg-transparent"
                      onClick={() => removeFilter(category, filter)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )),
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range */}
      <Card className="border-0 shadow-lg rounded-2xl">
        <CardHeader className="pb-3">
          <Button
            variant="ghost"
            className="flex items-center justify-between w-full p-0 h-auto"
            onClick={() => toggleSection("precio")}
          >
            <CardTitle className="text-lg font-semibold text-gray-900">Rango de Precio</CardTitle>
            {expandedSections.precio ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </Button>
        </CardHeader>
        {expandedSections.precio && (
          <CardContent className="pt-0">
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={3000}
                min={300}
                step={50}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Mínimo</div>
                  <div className="font-semibold text-[#712581]">${priceRange[0]}</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Máximo</div>
                  <div className="font-semibold text-[#712581]">${priceRange[1]}</div>
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Filter Categories */}
      {Object.entries(filterCategories).map(([category, options]) => (
        <Card key={category} className="border-0 shadow-lg rounded-2xl">
          <CardHeader className="pb-3">
            <Button
              variant="ghost"
              className="flex items-center justify-between w-full p-0 h-auto"
              onClick={() => toggleSection(category)}
            >
              <CardTitle className="text-lg font-semibold text-gray-900 capitalize">
                {category === "carreras" ? "Por Carrera" : category}
              </CardTitle>
              {expandedSections[category] ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </Button>
          </CardHeader>
          {expandedSections[category] && (
            <CardContent className="pt-0">
              <div className="space-y-3">
                {options.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={`${category}-${option}`}
                      checked={selectedFilters[category]?.includes(option) || false}
                      onCheckedChange={(checked) => handleFilterChange(category, option, checked as boolean)}
                      className="border-2 border-gray-300 data-[state=checked]:bg-[#712581] data-[state=checked]:border-[#712581]"
                    />
                    <label
                      htmlFor={`${category}-${option}`}
                      className="text-sm font-medium text-gray-700 cursor-pointer flex-1"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}
