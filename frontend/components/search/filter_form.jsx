import React, { useState } from 'react';

const FilterForm = ({updateFilter}) => {
    const [minSeating, setMin] = useState(1);
    const [maxSeating, setMax] = useState(10);
    return (
    <div>
        <label>
            Minimum Seating
            <input type="number" 
                value={minSeating}
                onChange={(e) => {
                    setMin(e.target.value);
                    updateFilter('minSeating', parseInt(e.target.value));
                    }
                }
                />
        </label>
        <label>
            Maximum Seating
            <input type="number"
                value={maxSeating}
                onChange={(e) => {
                    setMax(e.target.value);
                    updateFilter('maxSeating', parseInt(e.target.value));
                    }
                }
                />
        </label>
    </div>
    )
}

export default FilterForm;