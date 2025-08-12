# Recipe & Team Management Application

A modern Angular application built with Bootstrap styling, featuring recipe browsing, team management, and interactive components with parent-child communication patterns.

## 🏗️ Project Architecture

### **Components Created/Modified**

#### **1. Header Component** (Modified)
- **Path**: `src/app/components/header/`
- **Features**:
  - Custom "DREAM" logo with circular blue gradient design
  - Navigation menu: Home, About, Meals, Team, Contacts
  - Active route highlighting with cyan accent
  - Responsive navbar with hamburger menu
  - Bootstrap Icons integration

#### **2. Home Component** (Recreated)
- **Path**: `src/app/components/home/`
- **Features**:
  - Clean page layout matching target design
  - "Special title For Home" section
  - Lorem ipsum content
  - Responsive design with proper typography

#### **3. About Component** (New)
- **Path**: `src/app/components/about/`
- **Features**:
  - Simple content page with team information
  - Consistent styling with the application theme
  - Responsive layout

#### **4. Meals Component** (New) 🍽️
- **Path**: `src/app/components/meals/`
- **Features**:
  - **Navigation within section**: Tab-style category filtering
  - **Parent-child data flow**: Passes meal data to child components
  - Categories: All Meals, Breakfast, Lunch, Dinner, Dessert
  - Responsive grid layout
  - Dynamic filtering functionality

#### **5. MealCard Component** (New - Child Component)
- **Path**: `src/app/components/meals/meal-card/`
- **Features**:
  - **Receives data from parent** via `@Input()` decorator
  - Displays meal image, name, description, price
  - Price badge overlay
  - Category badge
  - Hover effects and animations
  - Order button functionality

#### **6. Team Component** (New) 👥
- **Path**: `src/app/components/team/`
- **Features**:
  - Team member cards with photos and bios
  - **Parent-child communication** with event emission
  - **Manages content visibility** based on child events
  - Professional card layout with hover effects

#### **7. TeamContent Component** (New - Child Component)
- **Path**: `src/app/components/team/team-content/`
- **Features**:
  - **Event emission to parent** using `@Output()` and `EventEmitter`
  - "Hide This Content" button functionality
  - Text content section
  - **Demonstrates parent-child communication pattern**

#### **8. Contacts Component** (Existing)
- **Path**: `src/app/components/contacts/`
- **Status**: Preserved from original structure

#### **9. RecipeDetail Component** (Existing)
- **Path**: `src/app/components/recipe-detail/`
- **Status**: Preserved from original structure

---

### **Services**

#### **Recipe Service** (Existing)
- **Path**: `src/app/services/recipe.ts`
- **Features**:
  - HTTP client integration
  - Recipe search functionality
  - API response handling
  - Error management

---

### **Interfaces & Type Definitions**

#### **1. Meal Interface** (New)
```typescript
export interface Meal {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}
```

#### **2. TeamMember Interface** (New)
```typescript
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}
```

#### **3. Recipe Interfaces** (Existing)
- `Recipe`
- `RecipeDetails`
- `RecipeSearchResponse`
- `RecipeDetailsResponse`

---

### **Routing Configuration**

#### **Updated Routes** (`src/app/app.routes.ts`)
```typescript
const routes: Routes = [
  { path: '', component: Home },                    // Home page
  { path: 'about', component: About },              // About page  
  { path: 'meals', component: Meals },              // Meals with navigation
  { path: 'team', component: Team },                // Team with interactions
  { path: 'recipe/:id', component: RecipeDetail },  // Recipe details
  { path: 'contacts', component: Contacts },        // Contact page
  { path: '**', redirectTo: '' }                   // Fallback
];
```

#### **Lazy Loading**
- All components use lazy loading for better performance
- Route-based code splitting implemented

---

### **API Connections**

#### **Recipe API Integration**
- **Service**: `RecipeService`
- **Endpoints**: Recipe search and details
- **HTTP Client**: Angular HttpClient
- **Error Handling**: Comprehensive error management
- **Response Types**: Strongly typed interfaces

---

### **Key Features Implemented**

#### **🔄 Parent-Child Communication Patterns**

**1. Data Flow (Parent → Child)**
- **Meals Component** → **MealCard Component**
- Uses `@Input()` decorator for data passing
- Demonstrates one-way data binding

**2. Event Emission (Child → Parent)**
- **TeamContent Component** → **Team Component**
- Uses `@Output()` and `EventEmitter` for communication
- Demonstrates event-driven architecture

#### **🧭 Navigation Within Sections**
- **Meals Component**: Tab-style category navigation
- Dynamic content filtering
- Active state management
- Responsive navigation design

#### **🎯 Interactive Features**
- **Disappearing Content**: Button-triggered content visibility
- **Hover Effects**: Card animations and transformations
- **Active States**: Navigation and button state management
- **Responsive Design**: Mobile-first approach

---

### **Styling & UI Framework**

#### **Bootstrap Integration**
- **Bootstrap CSS**: Component styling and grid system
- **Bootstrap Icons**: Icon font library for UI elements
- **Responsive Classes**: Mobile-first responsive design

#### **Custom CSS Features**
- **CSS Variables**: Consistent color scheme
- **Hover Effects**: Smooth transitions and animations
- **Typography**: Consistent font hierarchy
- **Box Shadows**: Depth and elevation effects

---

### **Technical Highlights**

#### **Angular Features Used**
- ✅ **Standalone Components**: Modern Angular architecture
- ✅ **Lazy Loading**: Route-based code splitting
- ✅ **TypeScript Interfaces**: Strong typing throughout
- ✅ **Reactive Forms**: Component interaction handling
- ✅ **HTTP Client**: API integration
- ✅ **Router**: Navigation and routing

#### **Development Practices**
- ✅ **Component Architecture**: Modular and reusable components
- ✅ **Separation of Concerns**: Clear separation of logic and presentation
- ✅ **Type Safety**: Comprehensive TypeScript usage
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Code Organization**: Logical folder structure

---

### **Project Structure**
```
src/app/
├── components/
│   ├── header/                 # Navigation header
│   ├── home/                   # Landing page
│   ├── about/                  # About page
│   ├── meals/                  # Meals with navigation
│   │   └── meal-card/          # Child component
│   ├── team/                   # Team page
│   │   └── team-content/       # Child component with events
│   ├── contacts/               # Contact information
│   └── recipe-detail/          # Recipe details
├── services/
│   └── recipe.ts               # API service
├── interfaces/
│   ├── recipe.ts               # Recipe types
│   ├── recipe-details.ts       # Recipe detail types
│   └── ...                     # Other interfaces
└── app.routes.ts               # Routing configuration
```

---

### **Key Learning Demonstrations**

1. **Parent-Child Data Flow**: Meals → MealCard components
2. **Event Emission**: TeamContent → Team communication
3. **Navigation within Sections**: Meals category filtering
4. **Conditional Rendering**: Team content visibility
5. **API Integration**: Recipe service implementation
6. **Responsive Design**: Bootstrap + custom CSS
7. **Modern Angular**: Standalone components and lazy loading

This application showcases modern Angular development practices with a focus on component communication, responsive design, and user interaction patterns.
