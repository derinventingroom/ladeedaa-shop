export default function ShopLoading() {
  return (
    <main className="container py-5">
      <header className="mb-5">
        <h1 className="display-4">Shop</h1>
        <p className="lead">Loading products...</p>
      </header>

      <div className="row g-4">
        {[1, 2, 3].map((item) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={item}
          >
            <div
              className="bg-secondary-subtle rounded"
              style={{ height: "300px" }}
            />

            <div
              className="bg-secondary-subtle rounded mt-3"
              style={{
                width: "70%",
                height: "24px",
              }}
            />

            <div
              className="bg-secondary-subtle rounded mt-2"
              style={{
                width: "35%",
                height: "20px",
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}