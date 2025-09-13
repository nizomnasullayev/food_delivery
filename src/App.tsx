import { Routes, Route,Link } from "react-router"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Comment from "./pages/Comment"

function App() {
    return (
        <div className="container py-3" >

            <header>
                <ul className="d-flex gap-3 list-unstyled">
                    <li><Link to="/">Logo</Link></li>
                </ul>
                <hr />
            </header>

            <Routes>
                <Route index element={<Home />} />
                <Route path="posts/:postId/comments" element={<Comment/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </div>
    )
}

export default App