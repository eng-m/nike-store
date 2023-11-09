import React from "react";
import { Cart, Content, Footer, Header, Navbar, Products } from "./components/index";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footer } from "./data/data";
import Stories from "./components/Stories";

const App = () => {
    return (
        <>
            <Navbar/>
            <Cart/>
            <main className="flex flex-col gap-16 relative">
                <Header heroapi={heroapi} />
                <Products endpoint={popularsales} ifExists/>
                <Content endpoint={highlight}/>
                <Products endpoint={toprateslaes} />
                <Content endpoint={sneaker} ifExists/>
                <Stories story={story}/>
                <Footer footer={footer}/>
            </main>
        </>
    );
};

export default App;
