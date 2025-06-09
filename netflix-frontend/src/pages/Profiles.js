import { useNavigate } from 'react-router-dom';

const profiles = [
  {
    name: 'Kebba k',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
  },
  {
    name: 'Sukar & Adama',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
  },
  {
    name: 'Dzieci',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
  },
];

export default function Profiles() {
  const navigate = useNavigate();

  const handleProfileClick = (profile) => {
    localStorage.setItem('activeProfile', JSON.stringify(profile));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10">Who's watching?</h1>
      <div className="flex gap-10 flex-wrap justify-center">
        {profiles.map((profile, index) => (
          <div
            key={index}
            onClick={() => handleProfileClick(profile)}
            className="cursor-pointer text-center hover:scale-105 transition-transform"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-28 h-28 rounded-md mb-2 object-cover"
            />
            <p className="text-lg">{profile.name}</p>
          </div>
        ))}
        <div className="cursor-pointer text-center hover:scale-105 transition-transform">
          <div className="w-28 h-28 bg-gray-500 rounded-md mb-2 flex items-center justify-center text-4xl">+</div>
          <p className="text-lg">Add Profile</p>
        </div>
      </div>
    </div>
  );
}
