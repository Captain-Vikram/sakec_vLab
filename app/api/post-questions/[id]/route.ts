import { NextRequest, NextResponse } from "next/server";

const postQuestionsMap: Record<string, any> = {
  "1": {
    experiment: "IV-Characteristics",
    questions: [
      {
        question: "What does the slope of the IV graph represent?",
        options: ["Resistance", "Current", "Voltage", "Power"],
        answer: "Resistance"
      },
      {
        question: "Which component shows a linear IV relationship?",
        options: ["Resistor", "Diode", "LED", "Capacitor"],
        answer: "Resistor"
      },
      {
        question: "Which of the following does not follow Ohm’s Law?",
        options: ["Resistor", "Ideal conductor", "Diode", "Wire"],
        answer: "Diode"
      },
      {
        question: "When voltage is doubled across a resistor, the current will...",
        options: ["Double", "Halve", "Stay the same", "Be zero"],
        answer: "Double"
      },
      {
        question: "IV characteristics help determine a component’s...",
        options: ["Resistance", "Power", "Shape", "Temperature"],
        answer: "Resistance"
      }
    ]
  },
  "2": {
    experiment: "Numerical Aperture",
    questions: [
      {
        question: "Higher numerical aperture means...",
        options: ["Less light acceptance", "More light acceptance", "Narrow beam", "Less bandwidth"],
        answer: "More light acceptance"
      },
      {
        question: "Numerical aperture is related to...",
        options: ["Acceptance angle", "Refraction index", "Fiber length", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "The unit of numerical aperture is...",
        options: ["Meters", "Radians", "Dimensionless", "dB"],
        answer: "Dimensionless"
      },
      {
        question: "If core refractive index increases, NA...",
        options: ["Increases", "Decreases", "Unchanged", "Becomes zero"],
        answer: "Increases"
      },
      {
        question: "NA affects which of the following the most?",
        options: ["Signal power", "Data rate", "Light gathering", "Temperature"],
        answer: "Light gathering"
      }
    ]
  },
  "3": {
    experiment: "Wedge Shape",
    questions: [
      {
        question: "Wedge-shaped films show interference due to...",
        options: ["Variable film thickness", "Refraction", "Absorption", "Transmission"],
        answer: "Variable film thickness"
      },
      {
        question: "Fringe spacing depends on...",
        options: ["Wedge angle", "Light intensity", "Material", "Refractive index"],
        answer: "Wedge angle"
      },
      {
        question: "What is used to form the wedge shape?",
        options: ["Two plates and a spacer", "Prism", "Lens", "Glass tube"],
        answer: "Two plates and a spacer"
      },
      {
        question: "Interference occurs due to...",
        options: ["Constructive and destructive interference", "Absorption", "Reflection only", "Diffraction"],
        answer: "Constructive and destructive interference"
      },
      {
        question: "Why is monochromatic light used?",
        options: ["To avoid scattering", "To see colored patterns", "To get distinct fringes", "For absorption"],
        answer: "To get distinct fringes"
      }
    ]
  },
  "4": {
    experiment: "Zener Diode",
    questions: [
      {
        question: "In reverse breakdown, Zener diode...",
        options: ["Conducts", "Blocks current", "Acts as open circuit", "Heats up"],
        answer: "Conducts"
      },
      {
        question: "The breakdown voltage is also called...",
        options: ["Zener voltage", "Forward voltage", "Bias voltage", "Critical voltage"],
        answer: "Zener voltage"
      },
      {
        question: "What remains constant in the breakdown region?",
        options: ["Voltage", "Current", "Resistance", "Power"],
        answer: "Voltage"
      },
      {
        question: "Zener diode symbol is like diode but with...",
        options: ["Bent line", "Zigzag", "Circle", "Arrow"],
        answer: "Bent line"
      },
      {
        question: "Zener diode is mainly used in...",
        options: ["Regulators", "Amplifiers", "Oscillators", "Multipliers"],
        answer: "Regulators"
      }
    ]
  },
  "5": {
    experiment: "Newton's Ring",
    questions: [
      {
        question: "Dark rings in Newton's Ring are due to...",
        options: ["Destructive interference", "Constructive interference", "Refraction", "Scattering"],
        answer: "Destructive interference"
      },
      {
        question: "The shape of the ring depends on...",
        options: ["Curvature of lens", "Light intensity", "Material only", "Temperature"],
        answer: "Curvature of lens"
      },
      {
        question: "Radius of ring increases with...",
        options: ["Ring number", "Light power", "Pressure", "Refractive index"],
        answer: "Ring number"
      },
      {
        question: "To observe Newton’s Ring, we use...",
        options: ["Monochromatic light", "White light", "LED", "Sunlight"],
        answer: "Monochromatic light"
      },
      {
        question: "Rings are observed through...",
        options: ["Reflection", "Absorption", "Refraction", "Scattering"],
        answer: "Reflection"
      }
    ]
  },
  "6": {
    experiment: "Hall Effect",
    questions: [
      {
        question: "Hall Effect voltage appears across...",
        options: ["Width of the sample", "Length of the sample", "Thickness of sample", "All directions"],
        answer: "Width of the sample"
      },
      {
        question: "Hall Effect is used to find...",
        options: ["Charge type", "Resistance", "Length", "Voltage drop"],
        answer: "Charge type"
      },
      {
        question: "In semiconductors, Hall effect is due to...",
        options: ["Electrons and holes", "Protons", "Neutrons", "Magnetic waves"],
        answer: "Electrons and holes"
      },
      {
        question: "Hall Effect is maximum when...",
        options: ["Current is perpendicular to magnetic field", "Current and field are parallel", "No current", "No field"],
        answer: "Current is perpendicular to magnetic field"
      },
      {
        question: "Direction of Hall current is given by...",
        options: ["Fleming’s left-hand rule", "Right-hand rule", "Ohm’s law", "Lenz’s law"],
        answer: "Right-hand rule"
      }
    ]
  },
  "7": {
    experiment: "Planck's Constant",
    questions: [
      {
        question: "Planck’s constant is determined from...",
        options: ["Photoelectric experiment", "KVL", "Ampere’s law", "Snell’s law"],
        answer: "Photoelectric experiment"
      },
      {
        question: "Photoelectric effect proves...",
        options: ["Particle nature of light", "Wave nature", "Mass conservation", "Field theory"],
        answer: "Particle nature of light"
      },
      {
        question: "In photoelectric effect, energy of photon is...",
        options: ["E = hν", "E = mc²", "E = IR", "E = qV"],
        answer: "E = hν"
      },
      {
        question: "Planck’s constant is used in...",
        options: ["Quantum theory", "Classical mechanics", "Thermodynamics", "Kinetics"],
        answer: "Quantum theory"
      },
      {
        question: "SI unit of Planck’s constant is...",
        options: ["J·s", "W", "V", "Coulomb"],
        answer: "J·s"
      }
    ]
  },
  "8": {
    experiment: "He-Ne Laser",
    questions: [
      {
        question: "He-Ne laser emits light at which wavelength?",
        options: ["633 nm", "532 nm", "450 nm", "1064 nm"],
        answer: "633 nm"
      },
      {
        question: "Which gas mixture is used in He-Ne laser?",
        options: ["Helium and Neon", "Hydrogen and Helium", "Neon and Argon", "Neon and Nitrogen"],
        answer: "Helium and Neon"
      },
      {
        question: "He-Ne laser is used in...",
        options: ["Holography", "Cooking", "Cooling", "Data storage"],
        answer: "Holography"
      },
      {
        question: "The light from a He-Ne laser is...",
        options: ["Monochromatic and coherent", "White and coherent", "Broad spectrum", "Polychromatic"],
        answer: "Monochromatic and coherent"
      },
      {
        question: "Active medium of He-Ne laser is in...",
        options: ["Gas phase", "Solid phase", "Liquid phase", "Plasma"],
        answer: "Gas phase"
      }
    ]
  }
};

export async function GET(
  request: NextRequest, 
  { params }: { params: Record<string, string> }
) {
  const id = params.id;
  const experiment = postQuestionsMap[id];

  if (!experiment) {
    return NextResponse.json({ success: false, message: "Experiment not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    id,
    ...experiment
  });
}
