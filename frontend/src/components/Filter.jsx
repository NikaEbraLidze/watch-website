import {useState} from "react";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import WatchesList from "./WatchesList";
import WatchesGrid from "./WatchesGrid";
import watches from "../../public/Watches";

export default function Filter(){
    const viewLayeoutStyle = {backgroundColor: '#20cd8d', color: '#ffffff'};

    const [search, setSearch] = useState("");
    const [isGrid, setIsGrid] = useState(true);
    const [category, setCategory] = useState("");

    let filteredWatches = watches.filter(watch =>
        watch.name.toLowerCase().includes(search.toLowerCase())
    );

    filteredWatches = filteredWatches.filter(watch =>
        watch.type.toLowerCase().includes(category.toLowerCase())
    );

    function handleChange(e){
        setSearch(e.target.value)
        setCategory("")
    }

    return(<>
        <div id="filter" className="filter">
            <div className="filter-container">
                <div className="view-layout">
                <ViewListIcon onClick={() => setIsGrid(false)} style={isGrid ? null : viewLayeoutStyle}/>
                <ViewQuiltIcon onClick={() => setIsGrid(true)} style={isGrid ? viewLayeoutStyle : null}/>
                </div>

                <div className="filter-inputs">
                    <label htmlFor="category">Choose Category:</label>
                    <select 
                        id="category" 
                        name="category" 
                        value={category} 
                        onChange={(e) => 
                        setCategory(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="classic">Classic</option>
                        <option value="sport">Sport</option>
                        <option value="automatic">Automatic</option>
                        <option value="smartwatch">Smartwatch</option>
                        <option value="quartz">Quartz</option>
                        <option value="luxury">Luxury</option>
                    </select>

                    <input 
                        type="text" 
                        placeholder="Search by name" 
                        value={search} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
        </div>

        {isGrid ? 
            <section id="view-layout-grid">
                <div className="view-layout-grid-container">
                    {filteredWatches.map((watch) => <WatchesGrid
                        id={watch.id}
                        key={watch.id}
                        name={watch.name}
                        price={watch.price}
                        description={watch.description}
                    /> )}
                </div>
            </section> 
            : 
            filteredWatches.map((watch) => <WatchesList
                id={watch.id}
                key={watch.id}
                name={watch.name}
                price={watch.price}
                description={watch.description}
        /> )}
        
    </>)
}