import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE || '';
const TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT || 15000);

const TOKEN_KEY = 'token';

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API放這
export const getProducts = () => http.get('/products');
export const getProduct = (id) => http.get(`/products/${id}`);
export const createProduct = (payload) => http.post('/products', payload);
export const updateProduct = (id, payload) => http.put(`/products/${id}`, payload);
export const deleteProduct = (id) => http.delete(`/products/${id}`);

// 其他組怎麼引入
// 以取得商品列表為例
//import { getProducts } from '../services/http'; => 引入api
 
// export default function ProductsPage() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     getProducts()
//       .then((res) => setItems(res.data))
//       .catch((err) => console.log(err.status, err.message));
//   }, []);

//   return null;
// }