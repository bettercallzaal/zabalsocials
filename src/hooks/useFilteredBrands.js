import { useMemo } from 'react'

// Custom hook for filtering brands based on search term and selected brand
// Uses useMemo to prevent unnecessary recalculations
export const useFilteredBrands = (brands, searchTerm, selectedBrand) => {
  const filteredBrands = useMemo(() => {
    // First, filter by search term
    const searchFiltered = brands.filter(brand => 
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.platforms.some(p => 
        p.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.purpose.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )

    // Then, filter by selected brand if one is chosen
    if (selectedBrand) {
      return searchFiltered.filter(b => b.id === selectedBrand)
    }

    return searchFiltered
  }, [brands, searchTerm, selectedBrand])

  const hasResults = filteredBrands.length > 0

  return { filteredBrands, hasResults }
}
