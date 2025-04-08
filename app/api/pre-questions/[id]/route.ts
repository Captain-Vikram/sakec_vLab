import { NextResponse } from "next/server";

const questionsMap: Record<string, any> = {
  "1": {
    experiment: "IV-Characteristics",
    questions: [
      {
        question: "What does 'IV' stand for in IV-characteristics?",
        options: ["Initial Voltage", "Input Voltage", "Current-Voltage", "Inverse Voltage"],
        answer: "Current-Voltage"
      },
      {
        question: "What is the unit of current?",
        options: ["Ohm", "Volt", "Ampere", "Watt"],
        answer: "Ampere"
      },
      {
        question: "What is plotted in an IV curve?",
        options: ["Current vs Voltage", "Power vs Resistance", "Voltage vs Resistance", "Current vs Time"],
        answer: "Current vs Voltage"
      },
      {
        question: "What is the slope of an IV curve for a resistor?",
        options: ["Resistance", "Conductance", "Voltage", "Power"],
        answer: "Conductance"
      },
      {
        question: "Which law governs the IV characteristics of a resistor?",
        options: ["Newton's Law", "Ohm's Law", "Faraday's Law", "Lenz's Law"],
        answer: "Ohm's Law"
      }
    ]
  },
  "2": {
    experiment: "Numerical Aperture",
    questions: [
      {
        question: "Numerical Aperture is a measure of a fiber's...",
        options: ["Width", "Core material", "Light-gathering ability", "Wavelength"],
        answer: "Light-gathering ability"
      },
      {
        question: "Formula for NA is...",
        options: ["NA = sinθ", "NA = √(n₁² - n₂²)", "NA = n₁ + n₂", "NA = 1 / sinθ"],
        answer: "NA = √(n₁² - n₂²)"
      },
      {
        question: "Higher NA means...",
        options: ["Less light accepted", "More light accepted", "Less bending", "Smaller angle"],
        answer: "More light accepted"
      },
      {
        question: "NA depends on which part of fiber?",
        options: ["Cladding only", "Core and cladding", "Jacket", "All of the above"],
        answer: "Core and cladding"
      },
      {
        question: "NA is dimensionless. True or False?",
        options: ["True", "False"],
        answer: "True"
      }
    ]
  },
  "3": {
    experiment: "Wedge Shape",
    questions: [
      {
        question: "Wedge-shaped film is used to study...",
        options: ["Reflection", "Refraction", "Interference", "Diffraction"],
        answer: "Interference"
      },
      {
        question: "What shape does the air film between the plates form?",
        options: ["Circular", "Rectangular", "Wedge", "Triangular"],
        answer: "Wedge"
      },
      {
        question: "Fringes formed in wedge film are...",
        options: ["Circular", "Elliptical", "Straight and parallel", "Random"],
        answer: "Straight and parallel"
      },
      {
        question: "The thickness of air film at fringe location determines...",
        options: ["Fringe shape", "Fringe contrast", "Fringe width", "Fringe color"],
        answer: "Fringe width"
      },
      {
        question: "The wedge angle is typically...",
        options: ["Very large", "Exactly 90°", "Very small", "Unstable"],
        answer: "Very small"
      }
    ]
  },
  "4": {
    experiment: "Zener Diode",
    questions: [
      {
        question: "Zener diode is mainly used for...",
        options: ["Amplification", "Rectification", "Voltage regulation", "Switching"],
        answer: "Voltage regulation"
      },
      {
        question: "In Zener breakdown, the current...",
        options: ["Increases linearly", "Decreases", "Stays constant", "Increases rapidly"],
        answer: "Increases rapidly"
      },
      {
        question: "Zener diode operates in which region?",
        options: ["Forward bias", "Reverse bias", "Cut-off", "Saturation"],
        answer: "Reverse bias"
      },
      {
        question: "What is the symbol of Zener diode?",
        options: ["Same as PN diode", "Arrow + bar", "Bar with zigzag", "Circle with arrow"],
        answer: "Arrow + bar"
      },
      {
        question: "Zener voltage is...",
        options: ["Forward voltage", "Breakdown voltage", "Peak voltage", "Critical voltage"],
        answer: "Breakdown voltage"
      }
    ]
  },
  "5": {
    experiment: "Newton's Ring",
    questions: [
      {
        question: "Newton's Rings are formed due to...",
        options: ["Refraction", "Polarization", "Interference", "Diffraction"],
        answer: "Interference"
      },
      {
        question: "Rings are observed in...",
        options: ["Reflection", "Transmission", "Absorption", "Emission"],
        answer: "Reflection"
      },
      {
        question: "The rings are...",
        options: ["Rectangular", "Concentric circles", "Parallel lines", "Spirals"],
        answer: "Concentric circles"
      },
      {
        question: "The radius of rings depends on...",
        options: ["Wavelength and lens curvature", "Only on wavelength", "Only on thickness", "Material only"],
        answer: "Wavelength and lens curvature"
      },
      {
        question: "Dark rings occur due to...",
        options: ["Constructive interference", "Destructive interference", "Scattering", "Absorption"],
        answer: "Destructive interference"
      }
    ]
  },
  "6": {
    experiment: "Hall Effect",
    questions: [
      {
        question: "Hall effect is observed when a current-carrying conductor is placed in...",
        options: ["Electric field", "Magnetic field", "Light beam", "Vacuum"],
        answer: "Magnetic field"
      },
      {
        question: "Hall voltage is proportional to...",
        options: ["Magnetic field", "Current", "Thickness", "Both A and B"],
        answer: "Both A and B"
      },
      {
        question: "Which charge carriers cause Hall Effect in metals?",
        options: ["Electrons", "Holes", "Protons", "Neutrons"],
        answer: "Electrons"
      },
      {
        question: "Hall Effect is used to measure...",
        options: ["Current", "Voltage", "Magnetic field", "Frequency"],
        answer: "Magnetic field"
      },
      {
        question: "Unit of Hall coefficient is...",
        options: ["m³/C", "C/m³", "T·m/A", "A/m²"],
        answer: "m³/C"
      }
    ]
  },
  "7": {
    experiment: "Planck's Constant",
    questions: [
      {
        question: "Planck's constant relates energy to...",
        options: ["Mass", "Wavelength", "Frequency", "Force"],
        answer: "Frequency"
      },
      {
        question: "Unit of Planck's constant is...",
        options: ["Joule", "Joule-second", "Watt", "Electron-volt"],
        answer: "Joule-second"
      },
      {
        question: "Photoelectric effect is used to determine...",
        options: ["Resistance", "Planck's constant", "Charge", "Magnetic field"],
        answer: "Planck's constant"
      },
      {
        question: "Einstein explained photoelectric effect using...",
        options: ["Newton's laws", "Quantum theory", "Wave theory", "String theory"],
        answer: "Quantum theory"
      },
      {
        question: "Value of Planck's constant (approx.) is...",
        options: ["6.63 × 10⁻³⁴ Js", "3.00 × 10⁸ Js", "1.6 × 10⁻¹⁹ Js", "9.1 × 10⁻³¹ Js"],
        answer: "6.63 × 10⁻³⁴ Js"
      }
    ]
  },
  "8": {
    experiment: "He-Ne Laser",
    questions: [
      {
        question: "The active medium of a He-Ne laser is...",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        answer: "Gas"
      },
      {
        question: "Which gases are used in He-Ne laser?",
        options: ["Helium and Nitrogen", "Helium and Neon", "Hydrogen and Neon", "Oxygen and Helium"],
        answer: "Helium and Neon"
      },
      {
        question: "What is the typical wavelength of He-Ne laser?",
        options: ["532 nm", "1550 nm", "633 nm", "405 nm"],
        answer: "633 nm"
      },
      {
        question: "He-Ne laser produces...",
        options: ["White light", "Incoherent light", "Monochromatic light", "Broad spectrum"],
        answer: "Monochromatic light"
      },
      {
        question: "Main use of He-Ne laser is in...",
        options: ["CD reading", "Laser pointers", "Scientific research", "Laser printing"],
        answer: "Scientific research"
      }
    ]
  }
};

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const experiment = questionsMap[id];

  if (!experiment) {
    return NextResponse.json({ success: false, message: "Experiment not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    id,
    ...experiment
  });
}
