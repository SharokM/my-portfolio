// import React from "react";
// import CategoryForm from "./CategoryForm";

// const Quotes = ({filteredQuotes, category, categories, handleCategoryChange, addToFavorites, favoriteQuotes}) => {

//     return(
//         <section className="all-skills">
//         <div className="skill-content-wrapper">
//             <div className="category-header">
//                 <h2>Pick Your Favorite Quotes Below</h2>
//                 <p>
//                     You have {filteredSelection.length} {category !== "All" && category} {filteredSelection.length === 1 ? "skill" : "skills"}!!
//                 </p>


//                 <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange}/>
//             </div>

//             {filteredSelection.map((skill) => (
//              <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />
//             ))}
//             </div>
//         </section>

//     );
// }

// export default Skills;