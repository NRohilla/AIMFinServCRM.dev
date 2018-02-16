import {Component} from '@angular/core';
@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.html',
})
export class AppMenuComponent {
    menus = [
        { menulink: '/', linkname: 'Home', navicon: 'fa-home' },
        { menulink: '/dashboard', linkname: 'Dashboard', navicon: 'fa-dashboard' },
        { menulink: '/email', linkname: 'Email', navicon: 'fa-envelope' },
        { menulink: '/ui', linkname: 'UI', navicon: 'fa-bar-chart' },
        { menulink: '/forms', linkname: 'Forms', navicon: 'fa-calendar' },
        { menulink: '/permissions', linkname: 'Permissions', navicon: 'fa-lock' },
        { menulink: '/authentication', linkname: 'Authentication', navicon: 'fa-user' },
        { menulink: '/charts', linkname: 'Charts', navicon: 'fa-line-chart' },
        { menulink: '/maps', linkname: 'Maps', navicon: 'fa-map-marker' }
    ];
}