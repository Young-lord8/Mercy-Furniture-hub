<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Furniture Hub - Premium Furniture Collection</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* COMPLETE CSS - ALL EMBEDDED */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }

        .navbar {
            padding: 1rem 0;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            font-size: 1.8rem;
            font-weight: 700;
            color: #2c3e50;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-link {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-link:hover {
            color: #e74c3c;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .search-box {
            position: relative;
            display: flex;
            align-items: center;
        }

        .search-box input {
            padding: 8px 12px 8px 35px;
            border: 2px solid #eee;
            border-radius: 25px;
            outline: none;
            transition: all 0.3s;
        }

        .search-box i {
            position: absolute;
            left: 12px;
            color: #666;
        }

        .search-box input:focus {
            border-color: #e74c3c;
        }

        .cart-icon {
            position: relative;
            font-size: 1.5rem;
            cursor: pointer;
            color: #333;
        }

        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background: #e74c3c;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .hamburger span {
            width: 25px;
            height: 3px;
            background: #333;
            margin: 3px 0;
            transition: 0.3s;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            animation: fadeInUp 1s ease;
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2.5rem;
            opacity: 0.95;
            animation: fadeInUp 1s ease 0.2s both;
        }

        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 1s ease 0.4s both;
        }

        .btn {
            padding: 15px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            display: inline-block;
        }

        .btn-primary {
            background: #e74c3c;
            color: white;
        }

        .btn-primary:hover {
            background: #c0392b;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(231, 76, 60, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .btn-secondary:hover {
            background: white;
            color: #667eea;
        }

        .hero-stats {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 3rem;
            animation: fadeInUp 1s ease 0.6s both;
        }

        .stat h3 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .stat p {
            opacity: 0.8;
        }

        /* Products Section */
        .products {
            padding: 100px 0;
            background: #f8f9fa;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-header h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }

        .section-header p {
            font-size: 1.2rem;
            color: #666;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .product-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            transition: all 0.4s;
            cursor: pointer;
        }

        .product-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }

        .product-image {
            width: 100%;
            height: 250px;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #bdc3c7;
        }

        .product-info {
            padding: 2rem;
        }

        .product-info h3 {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }

        .product-price {
            font-size: 1.6rem;
            font-weight: 700;
            color: #e74c3c;
            margin-bottom: 1rem;
        }

        .product-rating {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .product-rating i {
            color: #f39c12;
        }

        /* Categories */
        .categories {
            padding: 100px 0;
        }

        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .category-card {
            text-align: center;
            padding: 3rem 2rem;
            border-radius: 20px;
            background: white;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            transition: all 0.4s;
            cursor: pointer;
            border: 3px solid transparent;
        }

        .category-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.15);
            border-color: #e74c3c;
        }

        .category-card i {
            font-size: 3.5rem;
            color: #e74c3c;
            margin-bottom: 1.5rem;
        }

        .category-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }

        /* About Section */
        .about {
            padding: 100px 0;
            background: #f8f9fa;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #2c3e50;
        }

        .about-text p {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
            color: #666;
            line-height: 1.8;
        }

        .features {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .feature {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .feature i {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
        }

        .about-image {
            text-align: center;
        }

        .image-placeholder {
            width: 100%;
            height: 400px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
        }

        /* Contact Section */
        .contact {
            padding: 100px 0;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .contact-item i {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.3rem;
            flex-shrink: 0;
        }

        .contact-item h3 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }

        .contact-form {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid #eee;
            border-radius: 12px;
            font-family: inherit;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #667eea;
        }

        /* Footer */
        .footer {
            background: #2c3e50;
            color: white;
            padding: 4rem 0 1rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            margin-bottom: 1.5rem;
            color: #ecf0f1;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.8rem;
        }

        .footer-section a {
            color: #bdc3c7;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: #e74c3c;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .social-links a {
            width: 45px;
            height: 45px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }

        .social-links a:hover {
            background: #e74c3c;
            transform: translateY(-3px);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #34495e;
            color: #bdc3c7;
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(5px);
        }

        .modal-content {
            background: white;
            margin: 5% auto;
            padding: 0;
            border-radius: 20px;
            width: 90%;
            max-width: 900px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: modalSlideIn 0.3s ease;
        }

        .close {
            position: absolute;
            right: 25px;
            top: 20px;
            font-size: 2.5rem;
            cursor: pointer;
            color: #999;
            z-index: 10;
        }

        .close:hover {
            color: #333;
        }

        .modal-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            padding: 3rem;
        }

        .modal-product-image {
            width: 100%;
            height: 400px;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #bdc3c7;
        }

        .product-details h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }

        .product-price {
            font-size: 2.2rem;
            font-weight: 700;
            color: #e74c3c;
            margin-bottom: 1rem;
        }

        .product-rating {
            color: #f39c12;
            margin-bottom: 1.5rem;
        }

        .product-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-top: 2rem;
        }

        .product-actions select {
            padding: 12px;
            border: 2px solid #eee;
            border-radius: 10px;
            font-size: 1rem;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(-50px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }

            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background-color: white;
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0,0,0,0.05);
                padding: 2rem 0;
            }

            .nav-menu.active {
                left: 0;
            }

            .header-actions {
                display: none;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero-stats {
                flex-direction: column;
                gap: 1.5rem;
                bottom: 2rem;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .about-content,
            .contact-content,
            .modal-body {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .products-grid {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            }
        }

        @media (max-width: 480px) {
            .products-grid {
                grid-template-columns: 1fr;
            }

            .categories-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .hero h1 {
                font-size: 2rem;
            }

            .modal-content {
                margin: 10% auto;
                width: 95%;
            }

            .modal-body {
                padding: 2rem 1.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <div class="logo-icon">🏠</div>
                    <span>Furniture Hub</span>
                </div>
                <ul class="nav-menu">
                    <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#products" class="nav-link">Products</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
                <div class="header-actions">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search furniture..." id="searchInput">
                    </div>
                    <div class="cart-icon" id="cartIcon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count" id="cartCount">0</span>
                    </div>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Discover Premium Furniture</h1>
            <p>Transform your space with our exquisite collection of modern and classic furniture</p>
            <div class="hero-buttons">
                <a href="#products" class="btn btn-primary">Shop Now</a>
                <a href="#about" class="btn btn-secondary">Learn More</a>
            </div>
        </div>
        <div class="hero-stats">
            <div class="stat">
                <h3>10K+</h3>
                <p>Happy Customers</p>
            </div>
            <div class="stat">
                <h3>500+</h3>
                <p>Products</p>
            </div>
            <div class="stat">
                <h3>50+</h3>
                <p>Designers</p>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
        <div class="container">
            <div class="section-header">
                <h2>Featured Products</h2>
                <p>Our best-selling furniture pieces</p>
            </div>
            <div class="products-grid" id="productsGrid">
                <!-- Products loaded by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
        <div class="container">
            <div class="section-header">
                <h2>Shop by Category</h2>
                <p>Find exactly what you're looking for</p>
            </div>
            <div class="categories-grid" id="categoriesGrid">
                <!-- Categories loaded by JavaScript -->
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>About Furniture Hub</h2>
                    <p>We craft furniture that tells a story. Each piece is designed with passion and precision, blending modern aesthetics with timeless craftsmanship. Our commitment to quality ensures your furniture will be cherished for generations.</p>
                    <div class="features">
                        <div class="feature">
                            <i class="fas fa-shipping-fast"></i>
                            <span>Free Shipping</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-undo"></i>
                            <span>30-Day Returns</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-shield-alt"></i>
                            <span>Quality Guaranteed</span>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <div class="image-placeholder">
                        <i class="fas fa-image"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2>Get In Touch</h2>
                <p>Ready to furnish your space? Contact us today!</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <h3>Call Us</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <p>hello@furniturehub.com</p>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <h3>Visit</h3>
                        <p>123 Furniture St, Design City, DC 12345</p>
                    </div>
                </div>
                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="logo">
                        <div class="logo-icon" style="font-size: 1rem;">🏠</div>
                        <span>Furniture Hub</span>
                    </div>
                    <p>Premium furniture for modern living. Quality you can trust, style you love.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-pinterest"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">Sofas</a></li>
                        <li><a href="#">Tables</a></li>
                        <li><a href="#">Chairs</a></li>
                        <li><a href="#">Beds</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Warranty</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Furniture Hub. All rights reserved. | Made with ❤️ for GitHub Pages</p>
            </div>
        </div>
    </footer>

    <!-- Product Modal -->
    <div class="modal" id="productModal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-body">
                <div class="modal-product-image" id="modalProductImage">
                    <i class="fas fa-couch" style="font-size: 4rem; color: #bdc3c7;"></i>
                </div>
                <div class="product-details">
                    <h2 id="modalProductName">Modern Velvet Sofa</h2>
                    <div class="product-price" id="modalProductPrice">$1,299</div>
                    <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(4.8)</span>
                    </div>
                    <p id="modalProductDesc">Luxurious velvet sofa with premium cushioning for ultimate comfort.</p>
                    <div class="product-actions">
                        <select id="quantitySelect">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <button class="btn btn-primary add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- COMPLETE JAVASCRIPT - ALL EMBEDDED -->
    <script>
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Product Data - NO IMAGES NEEDED
        const products = [
            {
                id: 1,
                name: 'Modern Velvet Sofa',
                price: '$1,299',
                icon: 'fas fa-couch',
                category: 'sofas',
                description: 'Luxurious velvet sofa with premium cushioning for ultimate comfort. Perfect for modern living rooms.',
                rating: 4.8
            },
            {
                id: 2,
                name: 'Scandinavian Coffee Table',
                price: '$299',
                icon: 'fas fa-table',
                category: 'tables',
                description: 'Minimalist coffee table with natural oak finish. Perfect centerpiece for any living space.',
                rating: 4.9
            },
            {
                id: 3,
                name: 'Ergonomic Office Chair',
                price: '$599',
                icon: 'fas fa-chair',
                category: 'chairs',
                description: 'Premium office chair with adjustable lumbar support and breathable mesh backrest.',
                rating: 4.7
            },
            {
                id: 4,
                name: 'Luxury Leather Sectional',
                price: '$2,499',
                icon: 'fas fa-couch',
                category: 'sofas',
                description: 'Spacious L-shaped sectional sofa in premium Italian leather. Seats 5 comfortably.',
                rating: 4.9
            },
            {
                id: 5,
                name: 'Dining Table Set',
                price: '$899',
                icon: 'fas fa-table',
                category: 'tables',
                description: 'Solid wood dining table with 6 chairs. Perfect for family gatherings.',
                rating: 4.6
            },
            {
                id: 6,
                name: 'Accent Armchair',
                price: '$399',
                icon: 'fas fa-chair',
                category: 'chairs',
                description: 'Stylish accent chair with plush velvet upholstery and gold legs.',
                rating: 4.8
            },
            {
                id: 7,
                name: 'King Size Platform Bed',
                price: '$1,799',
                icon: 'fas fa-bed',
                category: 'beds',
                description: 'Modern platform bed frame with built-in storage and upholstered headboard.',
                rating: 4.7
            },
            {
                id: 8,
                name: 'Recliner Sofa',
                price: '$1,899',
                icon: 'fas fa-couch',
                category: 'sofas',
                description: 'Motorized recliner sofa with massage function and heated seats.',
                rating: 4.9
            }
        ];

        // Load products on page load
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts(products);
            loadCategories();
            setupEventListeners();
            updateCartCount();
        });

        // Load products into grid
        function loadProducts(productList) {
            const productsGrid = document.getElementById('productsGrid');
            productsGrid.innerHTML = '';

            productList.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
        }

        // Create product card element
        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.productId = product.id;
            
            card.innerHTML = `
                <div class="product-image">
                    <i class="${product.icon}" style="font-size: 3.5rem; color: #e74c3c;"></i>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span>(${product.rating})</span>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => openProductModal(product));
            return card;
        }

        function generateStars(rating) {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                stars += i <= Math.floor(rating) ? '<i class="fas fa-star"></i>' : 
                         i - 0.5 <= rating ? '<i class="fas fa-star-half-alt"></i>' : 
                         '<i class="far fa-star"></i>';
            }
            return stars;
        }

        // Categories
        function loadCategories() {
            const categoriesGrid = document.getElementById('categoriesGrid');
            const categories = [
                { name: 'All Products', icon: 'fas fa-th-large', category: 'all' },
                { name: 'Sofas', icon: 'fas fa-couch', category: 'sofas' },
                { name: 'Tables', icon: 'fas fa-table', category: 'tables' },
                { name: 'Chairs', icon: 'fas fa-chair', category: 'chairs' },
                { name: 'Beds', icon: 'fas fa-bed', category: 'beds' }
            ];

            categories.forEach(cat => {
                const categoryCard = document.createElement('div');
                categoryCard.className = 'category-card';
                categoryCard.dataset.category = cat.category;
                categoryCard.innerHTML = `
                    <i class="${cat.icon}"></i>
                    <h3>${cat.name}</h3>
                    <p>${getCategoryDescription(cat.category)}</p>
                `;
                
                categoryCard.addEventListener('click', function() {
                    filterProductsByCategory(this.dataset.category);
                    document.querySelectorAll('.category-card').forEach(c => c.style.borderColor = 'transparent');
                    this.style.borderColor = '#e74c3c';
                });
                
                categoriesGrid.appendChild(categoryCard);
            });
        }

        function getCategoryDescription(category) {
            const descriptions = {
                'all': 'Browse entire collection',
                'sofas': 'Comfortable seating',
                'tables': 'Perfect for any space',
                'chairs': 'Ergonomic designs',
                'beds': 'Quality sleep'
            };
            return descriptions[category] || 'Great selection';
        }

        function filterProductsByCategory(category) {
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(p => p.category === category);
            loadProducts(filteredProducts);
        }

        // Product Modal
        function setupEventListeners() {
            const modal = document.getElementById('productModal');
            const closeBtn = document.querySelector('.close');
            
            closeBtn.addEventListener('click', () => modal.style.display = 'none');
            
            window.addEventListener('click', (e) => {
                if (e.target === modal) modal.style.display = 'none';
            });

            document.getElementById('searchInput').addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                const filtered = products.filter(p => 
                    p.name.toLowerCase().includes(searchTerm) ||
                    p.description.toLowerCase().includes(searchTerm)
                );
                loadProducts(filtered);
            });

            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const button = this.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'Sending...';
                button.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for your message! We\'ll get back to you soon. 📧');
                    this.reset();
                    button.textContent = originalText;
                    button.disabled = false;
                }, 1500);
            });

            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('add-to-cart')) {
                    addToCart(currentProduct);
                }
            });
        }

        let currentProduct = null;

        function openProductModal(product) {
            currentProduct = product;
            
            document.getElementById('modalProductImage').innerHTML = `<i class="${product.icon}" style="font-size: 4rem; color: #e74c3c;"></i>`;
            document.getElementById('modalProductName').textContent = product.name;
            document.getElementById('modalProductPrice').textContent = product.price;
            document.getElementById('modalProductDesc').textContent = product.description;
            
            document.getElementById('productModal').style.display = 'block';
        }

        // Cart functionality
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        function addToCart(product) {
            const quantitySelect = document.getElementById('quantitySelect');
            const quantity = parseInt(quantitySelect.value);
            
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    ...product,
                    quantity: quantity
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            const button = document.querySelector('.add-to-cart');
            const originalText = button.textContent;
            button.textContent = 'Added! ✅';
            button.style.background = '#27ae60';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 2000);
        }

        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
            document.getElementById('cartCount').textContent = totalItems;
        }

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.product-card, .category-card, .about-content, .contact-content').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    </script>
</body>
</html>
