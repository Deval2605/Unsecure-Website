// Amazon - Main JavaScript File
// This file contains mock data and shared functions

// Mock Users Database
function getUsers() {
    return [
        {
            id: 1,
            username: 'Deval',
            password: 'Deval123',
            email: 'Deval@email.com',
            role: 'user',
            address: '123 XYZ nagar',
            creditCard: '**** **** **** 1234',
            orders: [
                { id: 'ORD001', total: 89.99, date: '2024-01-15' },
                { id: 'ORD002', total: 45.00, date: '2024-01-20' }
            ]
        },
        {
            id: 2,
            username: 'Dev',
            password: 'Dev123',
            email: 'Dev@email.com',
            role: 'user',
            address: '456 Delhi',
            creditCard: '**** **** **** 5678',
            orders: [
                { id: 'ORD003', total: 120.50, date: '2024-01-18' }
            ]
        },
        {
            id: 3,
            username: 'admin',
            password: 'admin123',
            email: 'admin@Amazon.com',
            role: 'admin',
            address: '789 Admin Blvd, Admin City, AC 00000',
            creditCard: '**** **** **** 9999',
            orders: []
        }
    ];
}

// Mock Products Database
function getProducts() {
    return [
        { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
        { id: 2, name: 'Mouse', price: 29.99, category: 'Electronics' },
        { id: 3, name: 'Keyboard', price: 79.99, category: 'Electronics' },
        { id: 4, name: 'Monitor', price: 299.99, category: 'Electronics' },
        { id: 5, name: 'Headphones', price: 149.99, category: 'Electronics' },
        { id: 6, name: 'Webcam', price: 89.99, category: 'Electronics' }
    ];
}

// Initialize localStorage with demo data if not exists
function initializeLocalStorage() {
    if (!localStorage.getItem('initialized')) {
        // Set demo cart
        localStorage.setItem('cart', '[]');
        localStorage.setItem('initialized', 'true');
    }
}

// Call initialization
initializeLocalStorage();


console.log('Amazon Platform loaded successfully');
console.log('API Version: 1.2.4');
console.log('Environment: Production');