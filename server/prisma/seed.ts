import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.subtask.deleteMany({})
  await prisma.task.deleteMany({})
  await prisma.column.deleteMany({})
  await prisma.board.deleteMany({})
  await prisma.user.deleteMany({})

  await prisma.user.create({
    data: {
      email: "test@kanban.app",
      boards: {
        create: [
          {
            name: "Platform Launch",
            columns: {
              create: [
                {
                  name: "Todo",
                  tasks: {
                    create: [
                      {
                        name: "Build UI for onboarding flow",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Sign up page",
                              isCompleted: false
                            },
                            {
                              name: "Sign in page",
                              isCompleted: false
                            },
                            {
                              name: "Welcome page",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Build UI for search",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Search page",
                              isCompleted: false
                            },
                          ]
                        }
                      },
                      {
                        name: "Build settings UI",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Account page",
                              isCompleted: false
                            },
                            {
                              name: "Billing page",
                              isCompleted: false
                            },
                          ]
                        }
                      },
                      {
                        name: "QA and test all major user journeys",
                        description: "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
                        subtasks: {
                          create: [
                            {
                              name: "Internal testing",
                              isCompleted: false
                            },
                            {
                              name: "External testing",
                              isCompleted: false
                            },
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  name: "Doing",
                  tasks: {
                    create: [
                      {
                        name: "Design settings and search pages",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Settings - Account page",
                              isCompleted: true
                            },
                            {
                              name: "Settings - Billing page",
                              isCompleted: true
                            },
                            {
                              name: "Search page",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Add account management endpoints",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Upgrade plan",
                              isCompleted: true
                            },
                            {
                              name: "Cancel plan",
                              isCompleted: true
                            },
                            {
                              name: "Update payment method",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Design onboarding flow",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Sign up page",
                              isCompleted: true
                            },
                            {
                              name: "Sign in page",
                              isCompleted: false
                            },
                            {
                              name: "Welcome page",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Add search enpoints",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Add search endpoint",
                              isCompleted: true
                            },
                            {
                              name: "Define search filters",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Add authentication endpoints",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Define user model",
                              isCompleted: true
                            },
                            {
                              name: "Add auth endpoints",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Research pricing points of various competitors and trial different business models",
                        description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                        subtasks: {
                          create: [
                            {
                              name: "Research competitor pricing and business models",
                              isCompleted: true
                            },
                            {
                              name: "Outline a business model that works for our solution",
                              isCompleted: false
                            },
                            {
                              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                              isCompleted: false
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  name: "Done",
                  tasks: {
                    create: [
                      {
                        name: "Conduct 5 wireframe tests",
                        description: "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
                        subtasks: {
                          create: [
                            {
                              name: "Complete 5 wireframe prototype tests",
                              isCompleted: true
                            }
                          ]
                        }
                      },
                      {
                        name: "Create wireframe prototype",
                        description: "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
                        subtasks: {
                          create: [
                            {
                              name: "Create clickable wireframe prototype in Balsamiq",
                              isCompleted: true
                            }
                          ]
                        }
                      },
                      {
                        name: "Review results of usability tests and iterate",
                        description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
                        subtasks: {
                          create: [
                            {
                              name: "Meet to review notes from previous tests and plan changes",
                              isCompleted: true
                            },
                            {
                              name: "Make changes to paper prototypes",
                              isCompleted: true
                            },
                            {
                              name: "Conduct 5 usability tests",
                              isCompleted: true
                            }
                          ]
                        }
                      },
                      {
                        name: "Create paper prototypes and conduct 10 usability tests with potential customers",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Create paper prototypes for version one",
                              isCompleted: true
                            },
                            {
                              name: "Complete 10 usability tests",
                              isCompleted: true
                            }
                          ]
                        }
                      },
                      {
                        name: "Market discovery",
                        description: "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
                        subtasks: {
                          create: [
                            {
                              name: "Interview 10 prospective customers",
                              isCompleted: true
                            }
                          ]
                        }
                      },
                      {
                        name: "Competitor analysis",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Find direct and indirect competitors",
                              isCompleted: true
                            },
                            {
                              name: "SWOT analysis for each competitor",
                              isCompleted: true
                            }
                          ]
                        }
                      },
                      {
                        name: "Research the market",
                        description: "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
                        subtasks: {
                          create: [
                            {
                              name: "Write up research analysis",
                              isCompleted: true
                            },
                            {
                              name: "Calculate TAM",
                              isCompleted: true
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            name: "Marketing Plan",
            columns: {
              create: [
                {
                  name: "Todo",
                  tasks: {
                    create: [
                      {
                        name: "Plan Product Hunt launch",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Find hunter",
                              isCompleted: false
                            },
                            {
                              name: "Gather assets",
                              isCompleted: false
                            },
                            {
                              name: "Draft product page",
                              isCompleted: false
                            },
                            {
                              name: "Notify customers",
                              isCompleted: false
                            },
                            {
                              name: "Notify network",
                              isCompleted: false
                            },
                            {
                              name: "Launch!",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Share on Show HN",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Draft out HN post",
                              isCompleted: false
                            },
                            {
                              name: "Get feedback and refine",
                              isCompleted: false
                            },
                            {
                              name: "Publish post",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Write launch article to publish on multiple channels",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Write article",
                              isCompleted: false
                            },
                            {
                              name: "Publish on LinkedIn",
                              isCompleted: false
                            },
                            {
                              name: "Publish on Inndie Hackers",
                              isCompleted: false
                            },
                            {
                              name: "Publish on Medium",
                              isCompleted: false
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  name: "Doing",
                  tasks: {
                  }
                },
                {
                  name: "Done",
                  tasks: {
                  }
                }
              ]
            }
          },
          {
            name: "Roadmap",
            columns: {
              create: [
                {
                  name: "Now",
                  tasks: {
                    create: [
                      {
                        name: "Launch version one",
                        description: "",
                        subtasks: {
                          create: [
                            {
                              name: "Launch privately to our waitlist",
                              isCompleted: false
                            },
                            {
                              name: "Launch publicly on PH, HN, etc.",
                              isCompleted: false
                            }
                          ]
                        }
                      },
                      {
                        name: "Review early feedback and plan next steps for roadmap",
                        description: "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
                        subtasks: {
                          create: [
                            {
                              name: "Interview 10 customers",
                              isCompleted: false
                            },
                            {
                              name: "Review common customer pain points and suggestions",
                              isCompleted: false
                            },
                            {
                              name: "Outline next steps for our roadmap",
                              isCompleted: false
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  name: "Next",
                  tasks: {
                  }
                },
                {
                  name: "Later",
                  tasks: {
                  }
                }
              ]
            }
          }
        ]
      }
    }
  })

  // await prisma.board.create({
  //   data: {
  //     name: "Marketing Plan",
  //   }
  // })
  //
  // await prisma.board.create({
  //   data: {
  //     name: "Roadmap",
  //   }
  // })
  const allBoards = await prisma.user.findMany()
  console.log(allBoards)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
