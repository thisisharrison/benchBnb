import React, { useState } from 'react';

const FilterForm = ({updateFilter, maxSeating, minSeating}) => {
    const [min_Seating, setMin] = useState(minSeating);
    const [max_Seating, setMax] = useState(maxSeating);
    return (
    <div>
        <label>
            Minimum Seating
            <input type="number" 
                value={min_Seating}
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
                value={max_Seating}
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