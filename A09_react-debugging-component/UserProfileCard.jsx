import { useState } from "react";

const userData = {
  name: "Rocelyn I. Lava",
  avatarUrl:
    "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-1/561683550_4124990914493730_8838219044858958598_n.jpg?stp=dst-jpg_tt6&cstp=mx1008x1008&ctp=s200x200&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGr8GN_Qihqh7X2We75gDmC7rRvs_Vgj_7utG-z9WCP_uEs5UZrczJL49jth5_o4NlG9RoGBE3Z6y7Pd7cZmInz&_nc_ohc=K9NE-xipOlUQ7kNvwEHxGVk&_nc_oc=AdoQMGrB4B72V4KxW0Kwt_r_tslfLcRqlTho6_5PAw8w-PVN4YibGQuuhYLV7q2vtps&_nc_zt=24&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=lB-J5QHcdB_C4kDEJJ-YSg&_nc_ss=7b2a8&oh=00_AQDXBbWO1SCC8-GeXeCenQhTNYlvzSRt3KzxtpJ_J6mI9A&oe=6A68245E", // sample avatar
  bio: "Show up. Be present. Push yourself. —Elmer A.",
  skills: ["React", "JavaScript", "HTML", "CSS"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

function UserProfileCard() {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState();

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleFavorited() {
    setIsFavorited(!isFavorited);
  }

  return (
    <>
      <div className="profile-card">
        <img src={userData.avatarUrl} />

        <h2>{userData.name}</h2>

        <label htmlFor="bio">Bio</label>
        <p id="bio">{userData.bio}</p>

        <h3>Skills</h3>
        <ul>
          {userData.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div style={{ color: "blue", fontWeight: "bold" }}>
          Messages sent: {messageCount}
        </div>

        {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}
        <br />
        <br />

        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset} style={{ marginLeft: "8px" }}>
          Reset
        </button>
        {userData.isOnline && (
          <button onClick={handleFavorited} style={{ marginLeft: "8px" }}>
            {isFavorited ? "☆ Favorite" : "★ Favorited"}
          </button>
        )}
      </div>
      <p className="footer">Card last updated: {userData.lastUpdated}</p>
    </>
  );
}

export default UserProfileCard;
