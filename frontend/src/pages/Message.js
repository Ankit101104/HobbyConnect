import React, { useState } from 'react';

const Message = () => {
    const [requests, setRequests] = useState([
        {
            title: 'Teach Me Guitar',
            description: 'Looking for someone to teach me guitar. Can exchange coding lessons.',
            postedBy: 'Emily Carter',
            image: 'https://cdn.prod.website-files.com/66cb77202db51139d6be1579/670e1c9c50cc91a000cdb451_learn-guitar-in-2-weeks-01-1.jpeg',
        },
        {
            title: 'Learn French',
            description: 'Want to learn conversational French. Can teach photography.',
            postedBy: 'Mark Wilson',
            image: 'https://media.istockphoto.com/id/502641289/photo/hello-hello.jpg?s=612x612&w=0&k=20&c=a6b-fV5WQkx_xUCG-JKUnkHrnf4GDxEepCDKHfW_t7I=',
        },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('New skill exchange request added!');
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Skill Exchange</h1>
            <div
                style={{
                    margin: '20px auto',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    maxWidth: '400px',
                }}
            >
                <h2 style={{ marginBottom: '20px' }}>Submit a Request</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
                        <input
                            type="text"
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
                        <textarea
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Exchange Skill:</label>
                        <input
                            type="text"
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: '10px 15px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                }}
            >
                {requests.map((request, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            width: '300px',
                            textAlign: 'left',
                            borderRadius: '5px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <img
                            src={request.image}
                            alt={request.title}
                            style={{
                                width: '100%',
                                borderRadius: '5px 5px 0 0',
                                objectFit: 'cover',
                            }}
                        />
                        <h3>{request.title}</h3>
                        <p>{request.description}</p>
                        <p><strong>Posted by:</strong> {request.postedBy}</p>
                        <button
                            style={{
                                padding: '10px 15px',
                                backgroundColor: '#28A745',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                width: '100%',
                            }}
                        >
                            Offer Skill
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Message;
