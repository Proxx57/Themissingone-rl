function Pagination({ total, limit, page, setPage }) {
    const numPages = Math.ceil(total / limit);
  
    return (
      <>
        <section className="pos_page">
          <button className="page" onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <button className="page"
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </button>
            ))}
          <button className="page" onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </button>
        </section>
      </>
    );
  }
  export default Pagination;