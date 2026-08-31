import Header from "../../components/Header";
import PageHeader from "./PageHeader";
import CategoryTabs from "./CategoryTabs";
import FiltersSort from "./FiltersSort";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";

export default function Catalogue() {
  return (
    <>
      <Header activePage="catalogue" />
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
