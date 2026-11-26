import { useState } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";
import CartSummary from "./components/CartSummary";
import "./App.css";
const products = [
 {id:1,name:"Minimal Desk Lamp",category:"Home",price:1299,oldPrice:1599,icon:"✦",tone:"lavender",tag:"BESTSELLER"},
 {id:2,name:"Everyday Backpack",category:"Accessories",price:1899,oldPrice:2199,icon:"▣",tone:"peach",tag:"NEW"},
 {id:3,name:"Ceramic Coffee Set",category:"Home",price:899,oldPrice:1099,icon:"☕",tone:"mint",tag:"POPULAR"},
 {id:4,name:"Wireless Headphones",category:"Tech",price:2499,oldPrice:2999,icon:"◉",tone:"blue",tag:"SALE"}
];
export default function App(){
 const [category,setCategory]=useState("All"); const [cart,setCart]=useState([]);
 const visible=category==="All"?products:products.filter(p=>p.category===category);
 const add=id=>setCart(items=>[...items,id]);
 return <div className="store"><Header count={cart.length}/><main className="shop"><div className="shop-intro"><div><p className="eyebrow">THE EVERYDAY EDIT</p><h1>Good things.<br/><span>Thoughtfully chosen.</span></h1><p>Useful finds for work, home and everything in between.</p></div><div className="shop-stamp">CURATED<br/>FOR YOU<br/>✳</div></div>
 <div className="catalog-head"><div><p className="eyebrow">SHOP THE COLLECTION</p><h2>Featured products</h2></div><span>{visible.length} ITEMS</span></div>
 <CategoryFilter value={category} onChange={setCategory}/>
 <section className="products">{visible.map(p=><ProductCard key={p.id} product={p} onAdd={()=>add(p.id)}/>)}</section>
 <CartSummary count={cart.length} total={cart.reduce((sum,id)=>sum+products.find(p=>p.id===id).price,0)}/>
 </main></div>;
}