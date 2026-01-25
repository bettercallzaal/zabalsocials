function EmptyState() {
  return (
    <div className="text-center py-16" role="status" aria-live="polite">
      <p className="text-gray-400 text-lg">No results found. Try a different search term.</p>
    </div>
  )
}

export default EmptyState
