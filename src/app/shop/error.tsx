"use client";

type ShopErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ShopError({
  error,
  reset,
}: ShopErrorProps) {
  return (
    <main className="container py-5">
      <div className="border rounded p-5 text-center">
        <h1 className="h2">Something went wrong</h1>

        <p className="text-secondary">
          We couldn't load the products. Please try again.
        </p>

        <button
          type="button"
          className="btn btn-dark"
          onClick={reset}
        >
          Try Again
        </button>

        {process.env.NODE_ENV === "development" && (
          <p className="text-danger mt-4 mb-0">
            {error.message}
          </p>
        )}
      </div>
    </main>
  );
}