import "./App.css";
// import logo from "./assets/image/logo.png";
// import image from "./assets/image/image.png";
import PageTwo from "./assets/PageTwo";

function App() {
  return (
    <PageTwo />
    // <div className="app-body">
    //   <div className="app-body-container">
    //     <h4 className="app-body-title">Yêu thích ngay</h4>
    //     <div className="app-body-group-header">
    //       <img src={logo} alt="logo" />
    //       <p>
    //         Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm{" "}
    //         có ưu đãi
    //       </p>
    //     </div>
    //     <h4 className="app-body-title">Mục yêu thích của bạn</h4>
    //     <div className="app-body-form-search">
    //       <button className="app-body-btn-search">
    //         <i className="fa-solid fa-magnifying-glass"></i>
    //       </button>
    //       <input
    //         type="text"
    //         className="form-control app-body-form-control-search"
    //         placeholder="Tìm kiếm"
    //       />
    //     </div>
    //     <div className="app-body-group-select">
    //       <select
    //         class="form-select app-body-group-select-active"
    //         aria-label="Default select example"
    //       >
    //         <option selected>Trạng Thái</option>
    //         <option value="1">One</option>
    //         <option value="2">Two</option>
    //         <option value="3">Three</option>
    //       </select>

    //       <select
    //         class="form-select app-body-group-category"
    //         aria-label="Default select example"
    //       >
    //         <option selected>Danh mục</option>
    //         <option value="1">One</option>
    //         <option value="2">Two</option>
    //         <option value="3">Three</option>
    //       </select>

    //       <select
    //         class="form-select app-body-group-select-add-recent"
    //         aria-label="Default select example"
    //       >
    //         <option selected>Đã thêm gần đây</option>
    //         <option value="1">One</option>
    //         <option value="2">Two</option>
    //         <option value="3">Three</option>
    //       </select>
    //       <button>
    //         <i className="fa-solid fa-bars"></i>
    //       </button>
    //     </div>
    //     <div className="app-body-button">
    //       <div className="app-body-button-group-title">
    //         <h5>Quà tặng</h5>
    //         <button>Tạo</button>
    //       </div>
    //       <div className="app-body-button-list-product">
    //         <div className="product-item">
    //           <img className="product-item-image" src={image} alt="img" />
    //           <div className="row-top">
    //             <div className="row-top-title">
    //               Granola siêu hạt ăn kiêng 15% yến mạch
    //             </div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>

    //           <div className="row-button">
    //             <p className="row-button-price">199.000 VND</p>
    //             <p className="row-button-discount">99%</p>
    //           </div>
    //         </div>

    //         <div className="product-item">
    //           <img className="product-item-image" src={image} alt="img" />
    //           <div className="row-top">
    //             <div className="row-top-title">
    //               Granola siêu hạt ăn kiêng 15% yến mạch
    //             </div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>

    //           <div className="row-button">
    //             <p className="row-button-price">199.000 VND</p>
    //             <p className="row-button-discount">99%</p>
    //           </div>
    //         </div>

    //         <div className="product-item">
    //           <img className="product-item-image" src={image} alt="img" />
    //           <div className="row-top">
    //             <div className="row-top-title">
    //               Granola siêu hạt ăn kiêng 15% yến mạch
    //             </div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>

    //           <div className="row-button">
    //             <p className="row-button-price">199.000 VND</p>
    //             <p className="row-button-discount">99%</p>
    //           </div>
    //         </div>

    //         <div className="product-item">
    //           <img className="product-item-image" src={image} alt="img" />
    //           <div className="row-top">
    //             <div className="row-top-title">
    //               Granola siêu hạt ăn kiêng 15% yến mạch
    //             </div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>

    //           <div className="row-button">
    //             <p className="row-button-price">199.000 VND</p>
    //             <p className="row-button-discount">99%</p>
    //           </div>
    //         </div>

    //         <div className="product-item">
    //           <img className="product-item-image" src={image} alt="img" />
    //           <div className="row-top">
    //             <div className="row-top-title">
    //               Granola siêu hạt ăn kiêng 15% yến mạch
    //             </div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>

    //           <div className="row-button">
    //             <p className="row-button-price">199.000 VND</p>
    //             <p className="row-button-discount">99%</p>
    //           </div>
    //         </div>

    //         <div className="product-item">
    //           <img className="product-item-image" src={image} alt="img" />
    //           <div className="row-top">
    //             <div className="row-top-title">
    //               Granola siêu hạt ăn kiêng 15% yến mạch
    //             </div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>

    //           <div className="row-button">
    //             <p className="row-button-price">199.000 VND</p>
    //             <p className="row-button-discount">99%</p>
    //           </div>
    //         </div>

    //         <div className="product-item">
    //           <img className="product-item-image" src={image} alt="img" />
    //           <div className="row-top">
    //             <div className="row-top-title">
    //               Granola siêu hạt ăn kiêng 15% yến mạch
    //             </div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>

    //           <div className="row-button">
    //             <p className="row-button-price">199.000 VND</p>
    //             <p className="row-button-discount">99%</p>
    //           </div>
    //         </div>

    //         <div className="product-item">
    //           <img className="product-item-image" src={image} alt="img" />
    //           <div className="row-top">
    //             <div className="row-top-title">
    //               Granola siêu hạt ăn kiêng 15% yến mạch
    //             </div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>

    //           <div className="row-button">
    //             <p className="row-button-price">199.000 VND</p>
    //             <p className="row-button-discount">99%</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
