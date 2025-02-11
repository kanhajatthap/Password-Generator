import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  
  const generatePassword = () => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+{}[]";
    
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="password-generator">
      <div>
        <label>Password Length: {length}</label>
        <input
          type="range"
          min="6"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        <label>Include Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        <label>Include Symbols</label>
      </div>

      <button onClick={generatePassword}>Generate Password</button>

      {password && <p className="generated-password">{password}</p>}
    </div>
  );
};

export default PasswordGenerator;