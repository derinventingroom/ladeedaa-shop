import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="container py-5">
      <h1 className="display-1">LaDeeDaa</h1>
      
      <p>
        Original artwork, prints, and apparel designed by me.
      </p>
      <div className="row mt-5">
      <div className="col-md-4">
        <div className="border p-4">Prints</div>
      </div>

      <div className="col-md-4">
        <div className="border p-4">T-Shirts</div>
      </div>

      <div className="col-md-4">
        <div className="border p-4">Original Designs</div>
      </div>
     </div>
    </main>
  );
}