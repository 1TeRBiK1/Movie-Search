import React, { useRef, useState } from 'react'



function useSearchForm(defaultValue ='') {
    const [value, setValue] = useState(defaultValue)
    return {
        default: {
            value,
            onChange: e => setValue(e.target.value),
            placeholder: 'Search...',
            type: 'search',
            autoComplete: "off",
            className: "search"
        },
        value: () => value,
        clear: () => setValue('')
    }
}

export default function Header({ searchMovies, errorSearch }) {

    const [ searchValue, setSearchValue ] = useState('Avengers')

    const input = useSearchForm()

    const refInput = useRef(null)

    function search(e) {
        e.preventDefault()
        refInput.current.blur()
        if (input.value().trim()){
            searchMovies(input.value())
            setSearchValue(input.value())
            input.clear()
        }
    }

    return (
        <>
            <h2 className="movieSearch">Movie Search</h2>
            <div className="header">
                <form onSubmit={search}>
                    <input  {...input.default}  ref={refInput}/>
                </form>
                <span className="result">{errorSearch ? 'Not found for ' : 'Results for '} {searchValue}</span>
            </div>
        </>
    )
}