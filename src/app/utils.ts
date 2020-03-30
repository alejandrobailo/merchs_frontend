import { Router } from '@angular/router';

export function logout(router: Router) {
    localStorage.removeItem('token');
    localStorage.removeItem('customerIdKanala');
    localStorage.removeItem('cart');
    router.navigate(['/']);
}
