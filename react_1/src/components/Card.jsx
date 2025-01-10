function Card({judul = "ini judul",deskripsi = "ini deskripsi"}) {
    
      return (
        <div style={{
            border:"1px solid black",
            padding: "12px",
            width: "300px",
            marginBottom: "12px",
        }}>
            <h2>{judul}</h2>
            <p>{deskripsi}</p>
        </div>
      );
}

export default Card;