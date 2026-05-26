import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok');
            })
            .then(data => setRecipes(data.recipes))
            .catch(err => setError(err.message));
    }, []);

    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    return (
        <>
        <Header />
        <div style={{ padding: '20px' }}>
            <h2>Delicious Recipes</h2>
            
            {/* 1. The Grid Container */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                {/* 2. Mapping through the array */}
                {recipes.map((recipe) => (
                    <div 
                        key={recipe.id} // Essential for React performance
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '15px',
                            textAlign: 'center',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                    >
                        <img 
                            src={recipe.image} 
                            alt={recipe.name} 
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
                        />
                        <h3 style={{ margin: '10px 0 5px 0' }}>{recipe.name}</h3>
                        <p style={{ color: '#666', fontSize: '14px' }}>Cuisine: {recipe.cuisine}</p>
                        <p style={{ fontWeight: 'bold', color: '#ffa500' }}>⭐ {recipe.rating}</p>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </>
);
}