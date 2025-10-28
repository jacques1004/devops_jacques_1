# E-Commerce Static Website

A simple static e-commerce website built with HTML, CSS, and JavaScript, featuring product listings, shopping cart functionality, and Docker deployment.

## Features

- Responsive navigation bar with cart counter
- Homepage with hero section and featured products
- Products page with responsive grid layout
- Shopping cart with add/remove functionality using localStorage
- Clean, modern design optimized for mobile and desktop
- Dockerized with Nginx for easy deployment
- CI/CD pipeline with GitHub Actions

## Local Development

### Prerequisites

- Docker and Docker Compose installed

### Running Locally

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd ecommerce-site
   ```

2. Run with Docker Compose:
   ```bash
   docker-compose up
   ```

3. Open your browser and navigate to `http://localhost:8080`

### Manual Testing

To test without Docker, simply open `index.html` in your browser.

## Deployment

The project includes a GitHub Actions CI/CD workflow that:

1. Lints HTML, CSS, and JavaScript files
2. Builds a Docker image
3. Pushes the image to Docker Hub

### Setting up CI/CD

1. Create a Docker Hub account if you don't have one
2. Go to your GitHub repository settings > Secrets and variables > Actions
3. Add the following secrets:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token (create one in Docker Hub settings)

4. Push to the `main` branch to trigger the CI/CD pipeline

## Project Structure

```
.
├── index.html              # Homepage with featured products
├── products.html           # Products listing page
├── cart.html               # Shopping cart page
├── style.css               # CSS styles for layout and responsiveness
├── script.js               # JavaScript for cart functionality
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Technologies Used

- HTML5
- CSS3 (Grid and Flexbox for responsive design)
- JavaScript (ES6+ with localStorage for cart persistence)
- Nginx
- Docker
- GitHub Actions

## Cart Functionality

The shopping cart uses browser localStorage to persist cart items across page reloads. Features include:

- Add items to cart from product pages
- View cart contents with quantities and subtotals
- Remove items from cart
- Real-time cart counter in navigation
- Total price calculation

## Building Manually

To build the Docker image manually:

```bash
docker build -t ecommerce-site .
docker run -p 8080:80 ecommerce-site
```

Then visit `http://localhost:8080` in your browser.
