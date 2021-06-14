import books from "../services/books";
import styles from '../styles/Books.css'

function Books() {
  return (
    <div>
      {books.map((book) => {
        return (
          <div className={styles.div} key={book.id}>
            <h1 className={styles.h1}>{book.nome}</h1>
            <p className={styles.p}>{book.genero}</p>
            <img className={styles.img} src={book.capa} alt={book.nome} />
          </div>
        );
      })}
    </div>
  );
}

export default Books;
