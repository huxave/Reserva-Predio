document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  let matriculado = document.querySelector("#matriculado").value;
  let profesion = document.querySelector("#profesion").value;
  let matricula = document.querySelector("#matricula").value;
  let motivo = document.querySelector("#motivo").value;
  let cantidad = document.querySelector("#cantidad").value;
  let fecha = document.querySelector("#fecha").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=+5493705005888&text=¡Hola!, Soy el/la ${profesion}: ${matriculado} matrícula N° ${matricula} y me gustaría hacer uso de las instalaciones del Predio Deportivo y Social para el día ${fecha} para evento: ${motivo}, asistirían ${cantidad} personas.`

  if (matriculado === "" || profesion === "" || matricula === "" || motivo === "" || cantidad === "" || fecha === "") {
    resp.classList.add("fail");
    resp.innerHTML = `${matriculado} faltan algunos datos &#128530`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `${matriculado}, enseguida te respondemos`;

  window.open(url);
});
