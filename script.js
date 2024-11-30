document.addEventListener("DOMContentLoaded", () => {
    const datePicker = document.getElementById("datePicker");

    // Obtener la fecha de hoy
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Los meses van de 0-11
    const year = today.getFullYear();

    // Calcular la fecha límite (hoy + 25 días)
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 25);

    // Formatear las fechas en formato yyyy-mm-dd
    const formatDate = (date) => {
        const d = date.getDate().toString().padStart(2, "0");
        const m = (date.getMonth() + 1).toString().padStart(2, "0");
        const y = date.getFullYear();
        return `${y}-${m}-${d}`;
    };

    // Establecer valores mínimos y máximos en el input
    datePicker.min = formatDate(today);
    datePicker.max = formatDate(maxDate);
});
