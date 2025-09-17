import game from '../../data/game_inventory.json';

/*
GameInventory.tsx

The initial components for Games specific to customer inventory. 
It extracts object from .Json and maps to web-page.
*/ 
export function Games(){
return(
      <section className="games">
        <h4>Games</h4>
        <ul className="game__list">
          {game.map(({title, year, description},index) => (
            <li key={index}>
              <strong>{title},{(year)}</strong>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    
);

}