import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  link: string;
  isButton?: boolean;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, OnChanges, OnDestroy {
  @Input() coupleNames: string = 'DAMARIS & EDGAR';
  @Input() leftMenuItems: MenuItem[] = [
    { label: 'Travel & Stay', link: '#travel' },
    { label: 'Our Story', link: '#our-story' },
    { label: 'Registry', link: '#registry' }
  ];
  
  @Input() rightMenuItems: MenuItem[] = [
    { label: 'FAQs', link: '#faqs' },
    { label: 'RSVP', link: '#rsvp', isButton: true }
  ];

  allMenuItems: MenuItem[] = [];
  allItems: MenuItem[] = [];
  mobileMenuOpen = false;
  activeSection: string = '';
  isClosing = false; // Para controlar la animación de cierre

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.updateAllMenuItems();
    this.setupScrollListener();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // Si cambian los menús izquierdo o derecho, actualizar allMenuItems
    if (changes['leftMenuItems'] || changes['rightMenuItems']) {
      this.updateAllMenuItems();
    }
  }
  
  ngOnDestroy() {
    // Asegurar que la clase se elimine del body al destruir el componente
    if (this.mobileMenuOpen) {
      this.renderer.removeClass(document.body, 'mobile-menu-open');
    }
    
    // Limpiar listener de scroll
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Método para actualizar la lista combinada
  private updateAllMenuItems() {
    this.allMenuItems = [...this.leftMenuItems, ...this.rightMenuItems];
    this.allItems = [...this.leftMenuItems, ...this.rightMenuItems];
  }

  // Methods to filter menu items
  getNonButtonItems(items: MenuItem[]): MenuItem[] {
    return items.filter(item => !item.isButton);
  }

  getButtonItems(items: MenuItem[]): MenuItem[] {
    return items.filter(item => item.isButton);
  }

  toggleMobileMenu(): void {
    if (this.mobileMenuOpen) {
      // Si el menú está abierto, iniciamos la animación de cierre
      this.isClosing = true;
      
      // Esperamos a que termine la animación antes de cerrarlo realmente
      setTimeout(() => {
        this.mobileMenuOpen = false;
        this.isClosing = false;
        this.renderer.removeClass(document.body, 'mobile-menu-open');
      }, 300); // Este tiempo debe coincidir con la duración de la animación
    } else {
      // Si el menú está cerrado, lo abrimos normalmente
      this.mobileMenuOpen = true;
      this.renderer.addClass(document.body, 'mobile-menu-open');
    }
  }
  
  closeMobileMenu(): void {
    if (this.mobileMenuOpen) {
      // Si el menú está abierto, iniciamos la animación de cierre
      this.isClosing = true;
      
      // Esperamos a que termine la animación antes de cerrarlo realmente
      setTimeout(() => {
        this.mobileMenuOpen = false;
        this.isClosing = false;
        this.renderer.removeClass(document.body, 'mobile-menu-open');
      }, 300); // Este tiempo debe coincidir con la duración de la animación
    }
  }
  
  navigateTo(link: string): void {
    // Cerrar el menú móvil al navegar
    this.closeMobileMenu();
    
    // Si es un enlace de anclaje, hacer scroll suave
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  // Para detectar la sección activa durante el scroll
  private setupScrollListener(): void {
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
    
    // Ejecutar una vez al inicio para establecer la sección activa inicial
    setTimeout(() => this.handleScroll(), 100);
  }
  
  private handleScroll(): void {
    // Detectar sección activa
    const sections = this.allItems
      .map(item => item.link)
      .filter(link => link.startsWith('#'))
      .map(link => document.querySelector(link));
    
    if (!sections.length) return;
    
    for (const section of sections) {
      if (!section) continue;
      
      const rect = section.getBoundingClientRect();
      const isVisible = 
        rect.top <= 150 && 
        rect.bottom >= 150;
      
      if (isVisible) {
        this.activeSection = section.id;
        break;
      }
    }
  }
  
  isActive(link: string): boolean {
    if (!link.startsWith('#')) return false;
    
    const id = link.substring(1);
    return id === this.activeSection;
  }
}
