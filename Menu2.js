import React from "react";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Contact from "./OnlineLibrary/Contact";
import Register from "./Register";
import Login from "./Login";
import Genre from "./OnlineLibrary/Genre";
import MainGenre from "./OnlineLibrary/MainGenre";
import Testing from "./OnlineLibrary/Testing";


function SubHome(){
    return(
        <div className="Home">
           <div>

---

📚 Welcome to **BookWWWorm** – Your Gateway to the World of Digital Reading<br></br>

 Read Smarter. Learn Faster. Explore Limitlessly.<br></br>

Welcome to **BookWWWorm**, the ultimate online library platform built for readers, learners, and knowledge seekers of the digital age. Whether you’re diving into academic research, catching up on the latest bestsellers, or exploring niche topics, BookWWWorm puts an entire library at your fingertips — anytime, anywhere.<br></br>

---

</div>
        </div>
    )
}
function Library(){
    return(
        <div>
            <div>🌟 What Makes BookWWWorm Unique?<br></br>

* **Massive Digital Library:** From textbooks and academic journals to novels and audiobooks, explore a diverse collection across all genres and subjects.<br></br>
* **Always Online, Always Accessible:** With 24/7 access on web and mobile, your library travels with you wherever you go.<br></br>
* **Smart Search & Filters:** Quickly find what you need using advanced search tools and personalized book suggestions.<br></br>
* **Custom Reading Tools:** Highlight text, make notes, adjust fonts, and switch between light and dark reading modes.<br></br>
* **Offline Access:** Download select titles to enjoy even without an internet connection.

---
👥 Built for Every Kind of Reader<br></br>

* 🎓 **Students & Researchers** – Get instant access to academic resources and study materials.<br></br>
* 👨‍🏫 **Teachers & Institutions** – Share curated reading lists and track engagement.<br></br>
* 📖 **Avid Readers** – Enjoy fiction, poetry, biographies, self-help, and more.<br></br>
* 🏢 **Professionals** – Stay updated with business books, whitepapers, and skill-building content.<br></br>

---

🔐 Safe, Secure & Personalized<br></br>

With user accounts, reading history, bookmarks, and preferences saved securely, BookWWWorm offers a personalized experience designed just for you.<br></br>

---

🚀 Join the BookWWWorm Community Today!<br></br>

Start your journey into smarter reading and lifelong learning. Sign up now and explore the endless possibilities waiting inside every book.<br></br>

🌐 Visit us at: [www.bookwwworm.com](http://www.bookwwworm.com) | 📩 Reach us at: [support@bookwwworm.com](mailto:support@bookwwworm.com)**<br></br></div>
        </div>
    )
}
function AuthorsAndBooks(){
    return(
        <div>
            <div>
                Here lies the great authors and there details about the books they have created!!!!
            </div>
        </div>
    )
}

function Menu2(){
    return(
        <BrowserRouter>
        <Header/>
        <div className="menu">
            <div className="menuitems"><Link to='/SubHome'>Home</Link></div>
            <div className="menuitems"><Link to='/test'>Books</Link></div>
            <div className="menuitems"><Link to='/Contact'>Contact</Link></div>
            <div className="menuitems">About
                <div className="subitems">
                    <div><Link to='/Library'>website Knowabouts</Link></div>
                    <div><Link to='/AuthorsAndBooks'>Authors and Books</Link></div>
                  </div>
            </div>
            <div className="menuitems">Login
                <div className="subitems">
                    <div><Link to='/register'>Register</Link></div>
                    <div><Link to='/login'>Login</Link></div>
                </div>
            </div>
        </div>
        <Routes>
            <Route path="/SubHome" element={<SubHome/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Library" element={<Library/>}></Route>
            <Route path="/AuthorsAndBooks" element={<AuthorsAndBooks/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/maingenre" element={<MainGenre/>}></Route>
            <Route path="/Genre" element={<Genre/>}></Route>
            <Route path='/test'element={<Testing/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Menu2;