import React from 'react';

const Community = () => {
    const collaborations = [
        {
            title: 'Web Development Project',
            description: 'Looking for a front-end developer to collaborate on a personal portfolio project.',
            image: 'https://www.creativeitinstitute.com/images/course/course_1663052056.jpg',
            postedBy: 'John Doe',
        },
        {
            title: 'Photography Workshop',
            description: 'Seeking a photographer to co-host an online workshop.',
            image: 'https://www.imagesredefined.in/wp-content/uploads/2019/05/photography-workshop-blog.jpg',
            postedBy: 'Jane Smith',
        },
        {
            title: 'Music Band Formation',
            description: 'Searching for a drummer to join a local band.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxAzI90dh05AlPdoJ4wYj2Br4Rv_jYlnugg&s',
            postedBy: 'Alex Johnson',
        },
    ];

    const handleGoBack = () => {
        window.history.back();
    };

    const pageStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: "'Arial', sans-serif",
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
    };

    const containerStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
    };

    const cardStyles = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px',
        transition: 'transform 0.3s, box-shadow 0.3s',
    };

    const cardHoverStyles = {
        transform: 'translateY(-10px)',
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
    };

    const buttonStyles = {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'all 0.3s ease-in-out',
    };

    const goBackButtonStyles = {
        ...buttonStyles,
        position: 'absolute',
        top: '20px',
        left: '20px',
        backgroundColor: '#ff5722',
    };

    return (
        <div style={pageStyles}>
            <button
                style={goBackButtonStyles}
                onClick={handleGoBack}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e64a19')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff5722')}
            >
                Go Back
            </button>
            <h1 style={{ marginBottom: '40px', color: '#333' }}>Collaboration Opportunities</h1>
            <div style={containerStyles}>
                {collaborations.map((collab, index) => (
                    <div
                        key={index}
                        style={cardStyles}
                        onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyles)}
                        onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyles)}
                    >
                        <img
                            src={collab.image}
                            alt={collab.title}
                            style={{
                                width: '100%',
                                borderRadius: '8px 8px 0 0',
                                marginBottom: '15px',
                            }}
                        />
                        <h3 style={{ color: '#444' }}>{collab.title}</h3>
                        <p style={{ color: '#555', fontSize: '14px', marginBottom: '15px' }}>
                            {collab.description}
                        </p>
                        <p style={{ fontSize: '12px', color: '#777' }}>
                            <strong>Posted by:</strong> {collab.postedBy}
                        </p>
                        <button
                            style={{
                                ...buttonStyles,
                                backgroundColor: '#28a745',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
                        >
                            Join Collaboration
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
