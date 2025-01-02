async function SearchPage({
    searchParams,
}: {
    searchParams: {
        query: string
    }
}) {
  return (
    <div>
        Search page for {searchParams.query}
    </div>
  )
}

export default SearchPage