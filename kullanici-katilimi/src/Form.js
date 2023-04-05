import { useState, useEffect } from "react";
import * as Yup from "yup";

const initalFormData = {
  isimDegeri: "",
  favIcecek: null,
  favMeyveler: []
};

// YUP
const formSchema = Yup.object().shape({
  isimDegeri: Yup.string()
    .required("İsim alanı zorunludurr")
    .min(3, "İsim en az 3 karakter olmalı"),
  favMeyveler: Yup.array()
    .min(1, "en az 1 veri seçinizz")
    .max(2, "en çok 2 veri seciniz"),
 
});

export default function App() {
  const [formData, setFormData] = useState(initalFormData);
  const [buttonDisabledMi, setButtonDisabledMi] = useState(true);

  const [errors, setErrors] = useState({
    isimDegeri: "",
    favIcecek: "",
    favMeyveler: ""
  });

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setButtonDisabledMi(!valid));
  }, [formData]);

  // YUP
  const handleReset = () => {
    setFormData(initalFormData);
    setErrors({
      isimDegeri: "",
      favIcecek: "",
      favMeyveler: ""
    });
  };

  const checkFormErrors = (name, value) => {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: ""
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        });
      });
  };
  // YUP

  function handleChange(event) {
    const { value, type, name } = event.target;

    if (type === "checkbox") {
      let yeniMeyveler;
      if (formData.favMeyveler.includes(value)) {
        yeniMeyveler = formData.favMeyveler.filter((m) => m !== value);
      } else {
        yeniMeyveler = [...formData.favMeyveler, value];
      }
      checkFormErrors(name, yeniMeyveler); // YUP
      setFormData({
        ...formData,
        [name]: yeniMeyveler
      });
    } else {
      checkFormErrors(name, value); // YUP
      setFormData({
        ...formData,
        [name]: value
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-line">
          <label htmlFor="isimAlani">İsim</label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.isimDegeri}
            id="isimAlani"
            name="isimDegeri"
          />
          {errors.isimDegeri !== "" && (
            <div className="field-error">{errors.isimDegeri}</div>
          )}
        </div>
       
          
        <div className="form-line">
          <label>Veri Bilgileri</label> <br />
          <label>
            <input
              onChange={handleChange}
              type="checkbox"
              name="favMeyveler"
              value="kiraz"
              checked={formData.favMeyveler.includes("kiraz")}
            />
           isim
          </label>
          <label>
            <input
              onChange={handleChange}
              type="checkbox"
              name="favMeyveler"
              value="üzüm"
              checked={formData.favMeyveler.includes("üzüm")}
            />
           email
          </label>
          <label>
            <input
              onChange={handleChange}
              type="checkbox"
              name="favMeyveler"
              value="portakal"
              checked={formData.favMeyveler.includes("portakal")}
            />
            şifre
          </label>
          {errors.favMeyveler !== "" && (
            <div className="field-error">{errors.favMeyveler}</div>
          )}
        </div>
        <div className="form-line">
          <button type="reset" onClick={handleReset}>
            Formu temizle
          </button>
          <button type="submit" disabled={buttonDisabledMi}>
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}
