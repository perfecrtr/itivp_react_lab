import './style.css';
import { useState } from 'react';

export const ContactForm=()=> {

  const buttons = [
    { value: 'sale', label: 'Продажа' },
    { value: 'rent', label: 'Аренда' },
  ];

  const [activeButton, setActiveButton] = useState(buttons[0].value);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    fullName: false,
    phone: false,
    email: false
  });

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: formData.fullName.trim().length < 3,
      phone: !/^[\d\s()+ -]{7,14}$/.test(formData.phone),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({
        fullName: '',
        phone: '',
        email: ''
      });
      setActiveButton(buttons[0].value);
    }
  };

  return (
    <div className="ContactForm">
      <div className="ContactForm-text"><span className="spec_yel">Свяжитесь</span> с нами</div>
      <div className="ContactForm-container">
        <form className="main-content" onSubmit={handleSubmit}>
          <div className="option-buttons">
            {buttons.map((button) => (
              <button
                key={button.value}
                type="button"
                className={`option-button ${activeButton === button.value ? 'active' : ''}`}
                onClick={() => handleButtonClick(button.value)}
                data-value={button.value}
              >
                {button.label}
              </button>
            ))}
          </div>
          
          <div className="content-group">
            <input
              type="text"
              name="fullName"
              placeholder="ФИО"
              value={formData.fullName}
              onChange={handleChange}
              maxLength="30"
              minLength="3"
              required
              className={errors.fullName ? 'error' : ''}
            />
            {errors.fullName && <span className="error-message">Минимум 3 символа</span>}
          </div>
          
          <div className="content-group">
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефона"
              value={formData.phone}
              onChange={handleChange}
              maxLength="14"
              minLength="7"
              required
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">Введите корректный номер</span>}
          </div>
          
          <div className="content-group">
            <input
              type="email"
              name="email"
              placeholder="Электронная почта"
              value={formData.email}
              onChange={handleChange}
              maxLength="50"
              minLength="5"
              required
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">Введите корректный email</span>}
          </div>
          
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </div>
    </div>
  );
};
