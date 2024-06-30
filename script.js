document.addEventListener('DOMContentLoaded', function () {
    // JavaScript for Main Carousel Functionality
    let carouselIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.querySelector('.left-arrow').addEventListener('click', () => {
        showSlide(carouselIndex - 1);
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        showSlide(carouselIndex + 1);
    });

    function showSlide(index) {
        carouselIndex = (index + totalSlides) % totalSlides;
        const offset = -carouselIndex * 100;
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }

    // JavaScript for Service Section Carousel Functionality
    const serviceCards = document.querySelector('.service-cards');
    const serviceNextArrow = document.querySelector('#services .right-arrow');
    const servicePrevArrow = document.querySelector('#services .left-arrow');
    let serviceIndex = 0;
    const totalServiceCards = document.querySelectorAll('.service-card').length;

    serviceNextArrow.addEventListener('click', () => {
        serviceIndex = (serviceIndex + 2) % totalServiceCards; // Change to +2 for two cards at a time
        updateServiceCarousel();
    });

    servicePrevArrow.addEventListener('click', () => {
        serviceIndex = (serviceIndex - 2 + totalServiceCards) % totalServiceCards; // Change to -2 for two cards at a time
        updateServiceCarousel();
    });

    function updateServiceCarousel() {
        const cardWidth = document.querySelector('.service-card').offsetWidth + 20; // Adjust as per your margin/padding
        const offset = -serviceIndex * cardWidth;
        serviceCards.style.transform = `translateX(${offset}px)`;
    }

    // Optional: Add event listeners for navigation buttons or swipe gestures for the main carousel
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            showSlide(carouselIndex - 1);
        });

        nextButton.addEventListener('click', () => {
            showSlide(carouselIndex + 1);
        });
    }

    // JavaScript for Product Details Functionality
    const productDetails = [
        {
            logo: 'mieruka-logo.png',
            image: 'mieruka-details.png',
            description: 'The product has been developed based on real-time experience, and our technical team decided to bring a system that will provide data Analytics to the management personnel on the shop floor and at higher levels in the management chain. It has been developed to easily configure the customer requirements without much coding, i.e., “Low coding/ No coding”. MIERUKA is beyond the limits of the dashboard, which can fetch the raw data from the high-level transaction systems and display the data in a graphical view like charts and grid views. Also, it will process the raw data into consumable information that can be helpful while decisions are made. Our team has handled the graphical presentation expertly, communicating more efficiently than text alone. It’s an analytical tool that provides technical and business insight into the key areas and alerts. Also, it’s an integrated application that allows us to compare multiple site data at your fingertip. It’s highly secured, I.e., every transaction the end-users will send and receive will be forwarded with an authorized token.',
            link: '#'
        },
        {
            logo: 'hyouka-logo.png',
            image: 'hyouka-details.png',
            description: 'Hyouka is more than just a performance evaluation system; it is a catalyst for transparency, fairness, and growth within your organization. With Hyouka, we prioritize not just the end results, but the process itself, ensuring that every step of the evaluation journey is conducted with integrity and clarity. Our platform is built upon the principle of collaboration between employees and managers, fostering a culture of accountability and alignment with organizational goals.',
            link: '#'
        },
        {
            logo: 'qmall-logo.png',
            image: 'qmall-details.png',
            description: 'QMALL is a secured customizable web based assessment tool, designed specifically to build your own assessment platform for evaluation of your team. You can conduct online exams on various chosen topics, right from planning of assessment until the result analysis for a reliable and accurate solution. This is packaged into seamless solution with highly protected platform. The online tests not only save you time but also provide instant results and evaluations immediately after appearing for the test. You can create the exams with our easy to use cloud based LMS. You can have various combinations like text, video, images, practice questions, etc.',
            link: '#'
        },
        {
            logo: 'saibo-logo.png',
            image: 'saibo-details.png',
            description: 'Today what we are looking for in scientific software is a robust platform that churns out result with reliability and consistency. Another key relevance should be the low cost of running and using the software without the scientist / technician spending a lot of time over it. The platform should be easy to use and gives the user enough significant data to make good scientific decisions without having to wait for weeks or days for the result.',
            link: '#'
        },
        {
            logo: 'mymice-logo.png',
            image: 'mymice-details.png',
            description: 'MyMice is an easy to use mobile app to manage the lifecycle of laboratory mice used in clinical research. Lifecycle data of mice like birth, age, parents, mating, pregnancy, demise, etc, can be easily monitored. The first version of MyMice app was a stand-alone app that uses local storage within the mobile phone. So the data of each researcher gets stored within the app and the other researcher cannot get to know the updates. We at CIC understand the importance of working in collaborative nature and hence upgraded the MyMice app to MyMice PRO. With the PRO version, we get a collaborative data sharing among the researcher of same lab. Any data updated by a researcher gets reflected to all the other researcher of same lab.',
            link: '#'
        }
    ];

    function showProductDetails(index) {
        const details = productDetails[index];
        document.querySelector('.product-details img').src = details.image;
        document.querySelector('.details-text img').src = details.logo;
        document.querySelector('.details-text p').textContent = details.description;
        document.querySelector('.details-text a').href = details.link;
    }

    // Show the first product details by default
    showProductDetails(0);

    // Optional: Add event listeners for product details navigation buttons or swipe gestures
    const productPrevButton = document.querySelector('.product-prev');
    const productNextButton = document.querySelector('.product-next');

    if (productPrevButton && productNextButton) {
        productPrevButton.addEventListener('click', () => {
            const newIndex = (carouselIndex - 1 + productDetails.length) % productDetails.length;
            showProductDetails(newIndex);
        });

        productNextButton.addEventListener('click', () => {
            const newIndex = (carouselIndex + 1) % productDetails.length;
            showProductDetails(newIndex);
        });
    }
});
