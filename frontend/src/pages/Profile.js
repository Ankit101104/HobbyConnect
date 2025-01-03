import React from 'react';

const Profile = () => {
    const user = {
        name: 'GUEST',
        bio: '..',
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s',
        skills: ['UI/UX Design', 'React', 'Figma', 'HTML & CSS', 'Web Development'],
    };

    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <div
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#007BFF',
                        padding: '20px',
                        color: '#fff',
                    }}
                >
                    <img
                        src={user.profilePicture}
                        alt="Profile"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            border: '5px solid #fff',
                            marginBottom: '10px',
                        }}
                    />
                    <h1 style={{ marginBottom: '5px' }}>{user.name}</h1>
                    <p style={{ fontStyle: 'italic', fontSize: '16px' }}>{user.bio}</p>
                </div>
                <div style={{ padding: '20px' }}>
                    <h2 style={{ marginBottom: '15px', color: '#007BFF' }}>Skills</h2>
                    <ul
                        style={{
                            listStyleType: 'none',
                            padding: 0,
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                            gap: '10px',
                            marginBottom: '20px',
                        }}
                    >
                        {user.skills.map((skill, index) => (
                            <li
                                key={index}
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    fontWeight: 'bold',
                                    color: '#007BFF',
                                }}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                    <button
                        style={{
                            padding: '12px 20px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
