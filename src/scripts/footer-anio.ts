document.addEventListener('DOMContentLoaded', (event) => {
    
    const currentDate: Date = new Date();
    
    
    const currentYear: number = currentDate.getFullYear();
    
   
    const yearSpan: HTMLElement | null = document.getElementById('year');
    
    
    if (yearSpan) {
       
        yearSpan.textContent = currentYear.toString();
    } else {
        console.error('El elemento con id "year" no fue encontrado');
    }
});
