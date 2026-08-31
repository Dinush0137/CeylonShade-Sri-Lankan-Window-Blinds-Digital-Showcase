import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import CategoryTabs from "./components/CategoryTabs";
import FiltersSort from "./components/FiltersSort";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHeader />
        <CategoryTabs />
        <FiltersSort />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
