// Mock test data structure for development and testing
export const mockTestData = {
  physics: [
    {
      name: "Section 1",
      type: "mcq-single",
      marks: 3,
      negative: 1,
      questions: [
        {
          id: "phy-s1-q1",
          number: 1,
          text: "A particle moves in a circle of radius 5 cm with constant speed and time period 0.2π sec. The acceleration of the particle is:",
          options: [
            "0.5 m/s²",
            "1 m/s²",
            "5 m/s²", 
            "10 m/s²"
          ],
          correctOption: 2
        },
        {
          id: "phy-s1-q2",
          number: 2,
          text: "The equivalent resistance between points A and B in the given circuit is:",
          image: "https://images.pexels.com/photos/3075527/pexels-photo-3075527.jpeg?auto=compress&cs=tinysrgb&w=600",
          options: [
            "5 Ω",
            "10 Ω",
            "15 Ω",
            "20 Ω"
          ],
          correctOption: 1
        },
        {
          id: "phy-s1-q3",
          number: 3,
          text: "Two identical point charges of +10 μC are placed 1 m apart. The electrostatic force between them is:",
          options: [
            "9 × 10⁻¹ N",
            "9 × 10⁰ N",
            "9 × 10¹ N",
            "9 × 10² N"
          ],
          correctOption: 2
        },
        {
          id: "phy-s1-q4",
          number: 4,
          text: "A convex lens forms a real image of an object placed at a distance of 20 cm from it. If the focal length of the lens is 15 cm, the image distance is:",
          options: [
            "60 cm",
            "30 cm",
            "20 cm",
            "15 cm"
          ],
          correctOption: 0
        }
      ]
    },
    {
      name: "Section 2",
      type: "mcq-multiple",
      marks: 4,
      negative: 2,
      questions: [
        {
          id: "phy-s2-q1",
          number: 1,
          text: "Which of the following statements is/are correct about electromagnetic waves?",
          options: [
            "They transport energy and momentum",
            "They can propagate through vacuum",
            "The speed of electromagnetic waves in vacuum is independent of their wavelength",
            "In vacuum, all electromagnetic waves have the same wavelength"
          ],
          correctOptions: [0, 1, 2]
        },
        {
          id: "phy-s2-q2",
          number: 2,
          text: "For a simple harmonic oscillator, which of the following statements is/are correct?",
          options: [
            "The acceleration is maximum at the mean position",
            "The velocity is maximum at the extreme positions",
            "The potential energy is minimum at the mean position",
            "The kinetic energy is maximum at the mean position"
          ],
          correctOptions: [2, 3]
        },
        {
          id: "phy-s2-q3",
          number: 3,
          text: "In the photoelectric effect, which of the following statements is/are correct?",
          options: [
            "The kinetic energy of the emitted photoelectrons depends on the frequency of the incident light",
            "The number of photoelectrons emitted per second is proportional to the intensity of the incident light",
            "No photoelectrons are emitted if the frequency of the incident light is less than a certain minimum value",
            "The photoelectric effect can be explained using the wave theory of light"
          ],
          correctOptions: [0, 1, 2]
        }
      ]
    },
    {
      name: "Section 3",
      type: "numerical",
      marks: 4,
      negative: 0,
      questions: [
        {
          id: "phy-s3-q1",
          number: 1,
          text: "A 2 kg mass is attached to a spring with spring constant 100 N/m. If the mass is displaced by 10 cm from its equilibrium position and released, calculate the maximum kinetic energy (in J) of the mass during the subsequent motion.",
          correctAnswer: 0.5
        },
        {
          id: "phy-s3-q2",
          number: 2,
          text: "A capacitor of 20 μF is charged to a potential difference of 500 V. The energy stored in the capacitor is ___ J.",
          correctAnswer: 2.5
        },
        {
          id: "phy-s3-q3",
          number: 3,
          text: "A wire of resistance 10 Ω is bent into a circle. The effective resistance between two diametrically opposite points of the circle is ___ Ω.",
          correctAnswer: 5
        }
      ]
    }
  ],
  chemistry: [
    {
      name: "Section 1",
      type: "mcq-single",
      marks: 3,
      negative: 1,
      questions: [
        {
          id: "chem-s1-q1",
          number: 1,
          text: "Which of the following is the correct electron configuration of Fe²⁺?",
          options: [
            "[Ar] 3d⁶ 4s²",
            "[Ar] 3d⁶ 4s⁰",
            "[Ar] 3d⁴ 4s²",
            "[Ar] 3d⁴ 4s⁰"
          ],
          correctOption: 1
        },
        {
          id: "chem-s1-q2",
          number: 2,
          text: "The hybridization of carbon in CH₃CN is:",
          options: [
            "sp",
            "sp²",
            "sp³",
            "sp³d"
          ],
          correctOption: 2
        },
        {
          id: "chem-s1-q3",
          number: 3,
          text: "Which of the following compounds will show geometrical isomerism?",
          options: [
            "2-butene",
            "2-butyne",
            "1-butene",
            "Propane"
          ],
          correctOption: 0
        },
        {
          id: "chem-s1-q4",
          number: 4,
          text: "The IUPAC name of the compound CH₃-CH=CH-CHO is:",
          options: [
            "But-2-enal",
            "But-2-enol",
            "But-2-anal",
            "1-Butanal"
          ],
          correctOption: 0
        }
      ]
    },
    {
      name: "Section 2",
      type: "matching",
      marks: 3,
      negative: 0,
      questions: [
        {
          id: "chem-s2-q1",
          number: 1,
          text: "Match the following types of isomerism with their examples:",
          listI: [
            "Chain isomerism",
            "Position isomerism",
            "Functional isomerism",
            "Metamerism"
          ],
          listII: [
            "Butane and 2-methylpropane",
            "1-propanol and 2-propanol",
            "Ethanol and dimethyl ether",
            "Diethyl ether and methyl propyl ether",
            "2-butene and cyclobutane"
          ],
          correctMatches: {
            "P": 0,
            "Q": 1,
            "R": 2,
            "S": 3
          }
        },
        {
          id: "chem-s2-q2",
          number: 2,
          text: "Match the following elements with their properties:",
          listI: [
            "Nitrogen",
            "Oxygen",
            "Fluorine",
            "Neon"
          ],
          listII: [
            "Highest electronegativity",
            "Colorless gas",
            "Forms triple bond in its molecule",
            "Used in discharge tubes",
            "Maintains life"
          ],
          correctMatches: {
            "P": 2,
            "Q": 4,
            "R": 0,
            "S": 3
          }
        }
      ]
    },
    {
      name: "Section 3",
      type: "numerical",
      marks: 4,
      negative: 0,
      questions: [
        {
          id: "chem-s3-q1",
          number: 1,
          text: "Calculate the pH of a solution prepared by mixing 50 mL of 0.2 M HCl and 50 mL of 0.1 M NaOH. (Enter the value rounded to the nearest integer)",
          correctAnswer: 2
        },
        {
          id: "chem-s3-q2",
          number: 2,
          text: "The number of sigma bonds in benzene (C₆H₆) is:",
          correctAnswer: 12
        },
        {
          id: "chem-s3-q3",
          number: 3,
          text: "The equivalent mass of K₂Cr₂O₇ in acidic medium is its molecular mass divided by _____. (Enter the value as a positive integer)",
          correctAnswer: 6
        }
      ]
    }
  ],
  mathematics: [
    {
      name: "Section 1",
      type: "mcq-single",
      marks: 3,
      negative: 1,
      questions: [
        {
          id: "math-s1-q1",
          number: 1,
          text: "Find the value of the definite integral ∫(0 to π/2) sin x dx",
          options: [
            "0",
            "1",
            "π/2",
            "2"
          ],
          correctOption: 1
        },
        {
          id: "math-s1-q2",
          number: 2,
          text: "If f(x) = x³ - 3x² + 4, then f'(2) equals:",
          options: [
            "0",
            "2",
            "4",
            "6"
          ],
          correctOption: 2
        },
        {
          id: "math-s1-q3",
          number: 3,
          text: "The solution of the differential equation dy/dx = xy with y(0) = 1 is:",
          options: [
            "y = e^(x²/2)",
            "y = e^x²",
            "y = e^(x/2)",
            "y = e^x"
          ],
          correctOption: 0
        },
        {
          id: "math-s1-q4",
          number: 4,
          text: "If the position vector of a point P is 2i + 3j - 4k, then the distance of P from the origin is:",
          options: [
            "√29",
            "√5",
            "3",
            "4"
          ],
          correctOption: 0
        }
      ]
    },
    {
      name: "Section 2",
      type: "numerical",
      marks: 4,
      negative: 0,
      questions: [
        {
          id: "math-s2-q1",
          number: 1,
          text: "If the function f(x) = x³ - 6x² + 9x + k has a local maximum at x = 1, find the value of k.",
          correctAnswer: 4
        },
        {
          id: "math-s2-q2",
          number: 2,
          text: "Find the value of the determinant |2 3 4; 1 2 3; 2 4 6|",
          correctAnswer: 0
        },
        {
          id: "math-s2-q3",
          number: 3,
          text: "A die is rolled twice. The probability of getting a sum of 7 is p/q, where p and q are coprime positive integers. Find the value of p + q.",
          correctAnswer: 11
        }
      ]
    },
    {
      name: "Section 3",
      type: "mcq-multiple",
      marks: 4,
      negative: 2,
      questions: [
        {
          id: "math-s3-q1",
          number: 1,
          text: "Which of the following statements is/are true for a continuous function f(x) on a closed interval [a, b]?",
          options: [
            "f(x) must have a maximum value in [a, b]",
            "f(x) must have a minimum value in [a, b]",
            "If f(a) and f(b) have opposite signs, then f(x) = 0 for at least one x in (a, b)",
            "If f'(x) = 0 for all x in (a, b), then f(x) must be a constant function"
          ],
          correctOptions: [0, 1, 2, 3]
        },
        {
          id: "math-s3-q2",
          number: 2,
          text: "Which of the following series converge?",
          options: [
            "∑(n=1 to ∞) 1/n",
            "∑(n=1 to ∞) 1/n²",
            "∑(n=1 to ∞) n/(n²+1)",
            "∑(n=1 to ∞) 1/n¹·⁰¹"
          ],
          correctOptions: [1, 3]
        },
        {
          id: "math-s3-q3",
          number: 3,
          text: "For the matrix A = [[1, 2], [3, 4]], which of the following statements is/are correct?",
          options: [
            "A is invertible",
            "The determinant of A is -2",
            "A has eigenvalue 5",
            "The trace of A is 5"
          ],
          correctOptions: [0, 2, 3]
        }
      ]
    }
  ]
};