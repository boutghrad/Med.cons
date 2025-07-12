// التنقل بين خطوات الحجز
document.addEventListener('DOMContentLoaded', function() {
    const bookingSteps = document.querySelectorAll('.step-indicator');
    const bookingContents = document.querySelectorAll('.booking-content');
    
    if(bookingSteps.length > 0) {
        bookingSteps.forEach((step, index) => {
            step.addEventListener('click', () => {
                // تحديث المؤشرات
                bookingSteps.forEach(s => s.classList.remove('active'));
                step.classList.add('active');
                
                // تحديث المحتوى
                bookingContents.forEach(c => c.classList.remove('active'));
                bookingContents[index].classList.add('active');
            });
        });
    }
    
    // اختيار موعد
    const timeSlots = document.querySelectorAll('.time-slot');
    if(timeSlots.length > 0) {
        timeSlots.forEach(slot => {
            slot.addEventListener('click', () => {
                timeSlots.forEach(s => s.classList.remove('selected'));
                slot.classList.add('selected');
            });
        });
    }
    
    // إرسال نموذج الحجز
    const bookingForm = document.getElementById('booking-form');
    if(bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // هنا يمكنك إضافة منطق إرسال الحجز
            alert('تم حجز موعدك بنجاح! سيتم تأكيد الحجز عبر البريد الإلكتروني.');
        });
    }
    
    // إرسال نموذج الاتصال
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // هنا يمكنك إضافة منطق إرسال الرسالة
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            contactForm.reset();
        });
    }
});
