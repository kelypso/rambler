import React from 'react'

const NewTrip = () => {
    return (
        <div className="NewTrip">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={tripData.name} placeholder="name" /><br />
                <input type="text" name="category" onChange={handleChange} value={tripData.category} placeholder="category" /><br />
                <input type="text" name="duration" onChange={handleChange} value={tripData.duration} placeholder="duration" /><br />
            <input type="submit" value="Add Trip" />
        </form>
        </div>
    )
}

export default NewTrip