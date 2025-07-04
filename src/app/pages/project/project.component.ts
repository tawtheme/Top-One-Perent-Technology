import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projectRequestForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm() {
    this.projectRequestForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[\+]?[1-9][\d]{0,15}$/)]],
      company: ['', [Validators.required, Validators.minLength(2)]],
      projectType: ['', [Validators.required]],
      projectTitle: ['', [Validators.required, Validators.minLength(5)]],
      projectDescription: ['', [Validators.required, Validators.minLength(20)]],
      budget: ['', [Validators.required]],
      timeline: ['', [Validators.required]],
      additionalRequirements: [''],
      preferredContact: ['email', [Validators.required]]
    });
  }



  // Form methods

  resetForm() {
    this.projectRequestForm.reset();
    this.projectRequestForm.patchValue({
      preferredContact: 'email'
    });
    this.submitSuccess = false;
  }

  onSubmit() {
    if (this.projectRequestForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Project Request Form Data:', this.projectRequestForm.value);
        this.isSubmitting = false;
        this.submitSuccess = true;
        
        // Reset form after successful submission
        setTimeout(() => {
          this.resetForm();
        }, 3000);
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched() {
    Object.keys(this.projectRequestForm.controls).forEach(key => {
      const control = this.projectRequestForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.projectRequestForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
      if (field.errors['pattern']) {
        return 'Please enter a valid phone number';
      }
    }
    return '';
  }

  getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      company: 'Company Name',
      projectType: 'Project Type',
      projectTitle: 'Project Title',
      projectDescription: 'Project Description',
      budget: 'Budget Range',
      timeline: 'Timeline',
      additionalRequirements: 'Additional Requirements',
      preferredContact: 'Preferred Contact Method'
    };
    return labels[fieldName] || fieldName;
  }

  // Form options
  projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'E-commerce Solution',
    'Custom Software',
    'Website Redesign',
    'SEO Optimization',
    'Social Media Marketing',
    'Other'
  ];

  budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  timelineOptions = [
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  // FAQ Data
  faqs = [
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.',
      isOpen: true
    },
    {
      question: 'What is your typical project cost?',
      answer: 'Project costs depend on the scope, features, and complexity. We offer projects ranging from $1,000 for simple websites to $100,000+ for enterprise solutions. We provide detailed quotes after understanding your requirements.',
      isOpen: false
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and technical support. We have various support packages to meet your ongoing needs.',
      isOpen: false
    },
    {
      question: 'Can you work with my existing systems and platforms?',
      answer: 'Absolutely! We specialize in integrating with existing systems, databases, and third-party platforms. We\'ll assess your current infrastructure and ensure seamless integration.',
      isOpen: false
    },
    {
      question: 'What technologies do you use for development?',
      answer: 'We use modern, industry-standard technologies including React, Angular, Vue.js for frontend; Node.js, Python, PHP for backend; and various databases and cloud platforms. We choose the best stack for your specific needs.',
      isOpen: false
    },
    {
      question: 'How do you handle project communication and updates?',
      answer: 'We maintain regular communication through scheduled calls, progress reports, and project management tools. You\'ll have a dedicated project manager and direct access to the development team throughout the process.',
      isOpen: false
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we offer comprehensive hosting solutions, domain registration, SSL certificates, and ongoing server management. We can also work with your existing hosting provider if preferred.',
      isOpen: false
    },
    {
      question: 'What happens if I need changes during development?',
      answer: 'We understand that requirements can evolve. We have a flexible change management process that allows for modifications while maintaining project timelines and budgets. We\'ll discuss any changes and their impact upfront.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
} 